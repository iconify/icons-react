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
		"content": `<style>.xv73hovyv {
  fill: currentColor;
  d: path("M21 16a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 21H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5ZM5 16a3.004 3.004 0 0 0 3 3h8a3 3 0 0 0 3-3v-6H5Z");
}
</style><path class="xv73hovyv"/>`,
		"fallback": "coolicons:panel-top-fill-round",
	});
}

export default Component;
