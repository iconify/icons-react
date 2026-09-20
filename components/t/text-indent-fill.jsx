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
		"content": `<style>.q2vee4bim {
  fill: currentColor;
  d: path("M224 128a8 8 0 0 1-8 8H112a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8M112 72h104a8 8 0 0 0 0-16H112a8 8 0 0 0 0 16m104 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M36.94 143.39a8 8 0 0 0 8.72-1.73l40-40a8 8 0 0 0 0-11.32l-40-40A8 8 0 0 0 32 56v80a8 8 0 0 0 4.94 7.39");
}
</style><path class="q2vee4bim"/>`,
		"fallback": "ph:text-indent-fill",
	});
}

export default Component;
