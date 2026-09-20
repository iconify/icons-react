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
		"content": `<style>.bs_wufjhm {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m47.18-95.09l-64-40A6 6 0 0 0 102 88v80a6 6 0 0 0 9.18 5.09l64-40a6 6 0 0 0 0-10.18M114 157.17V98.83L160.68 128Z");
}
</style><path class="bs_wufjhm"/>`,
		"fallback": "ph:play-circle-light",
	});
}

export default Component;
