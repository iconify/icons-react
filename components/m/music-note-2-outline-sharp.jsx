import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p2169obvm {
  fill: currentColor;
  d: path("M3.175 19.825Q2 18.65 2 17t1.175-2.825T6 13q.575 0 1.063.138T8 13.55V5l12-2v12q0 1.65-1.175 2.825T16 19t-2.825-1.175T12 15t1.175-2.825T16 11q.575 0 1.063.138t.937.412V7.425L10 9v8q0 1.65-1.175 2.825T6 21t-2.825-1.175");
}
</style><path class="p2169obvm"/>`,
		"fallback": "material-symbols:music-note-2-outline-sharp",
	});
}

export default Component;
