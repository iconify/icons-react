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
		"content": `<style>.ajj_f_vca {
  fill: currentColor;
  d: path("M240 56v64a8 8 0 0 1-13.66 5.66L200 99.31l-58.34 58.35a8 8 0 0 1-11.32 0L96 123.31l-66.34 66.35a8 8 0 0 1-11.32-11.32l72-72a8 8 0 0 1 11.32 0L136 140.69L188.69 88l-26.35-26.34A8 8 0 0 1 168 48h64a8 8 0 0 1 8 8");
}
</style><path class="ajj_f_vca"/>`,
		"fallback": "ph:trend-up-fill",
	});
}

export default Component;
