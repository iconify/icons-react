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
		"content": `<style>.r9vyrhbsl {
  fill: currentColor;
  d: path("M5 19h9v-5h5V5H5zm-2 2V3h18v12l-6 6zm4-7v-2h5v2zm0-4V8h10v2zm-2 9V5z");
}
</style><path class="r9vyrhbsl"/>`,
		"fallback": "material-symbols:sticky-note-2-outline-sharp",
	});
}

export default Component;
