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
		"content": `<style>.tg4b7_x3k {
  fill: currentColor;
  d: path("M3.175 19.825Q2 18.65 2 17t1.175-2.825T6 13q.575 0 1.063.138T8 13.55v-7.7q0-.375.238-.662t.587-.338l10-1.65q.45-.075.813.213t.362.762V15q0 1.65-1.175 2.825T16 19t-2.825-1.175T12 15t1.175-2.825T16 11q.575 0 1.063.138t.937.412V7.425L10 9v8q0 1.65-1.175 2.825T6 21t-2.825-1.175");
}
</style><path class="tg4b7_x3k"/>`,
		"fallback": "material-symbols:music-note-2-outline-rounded",
	});
}

export default Component;
