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
		"content": `<style>.a-j1hcc8m {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10 6a6 6 0 1 0 0-12a6 6 0 0 0 0 12");
}
</style><path class="a-j1hcc8m"/>`,
		"fallback": "fluent:record-24-filled",
	});
}

export default Component;
