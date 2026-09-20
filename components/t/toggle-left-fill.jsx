import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t4313lbey {
  fill: currentColor;
  d: path("M176 56H80a72 72 0 0 0 0 144h96a72 72 0 0 0 0-144M80 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40");
}
</style><path class="t4313lbey"/>`,
		"fallback": "ph:toggle-left-fill",
	});
}

export default Component;
