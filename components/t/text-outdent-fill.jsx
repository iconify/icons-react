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
		"content": `<style>.f_qdmjh6c {
  fill: currentColor;
  d: path("M224 128a8 8 0 0 1-8 8H112a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8M112 72h104a8 8 0 0 0 0-16H112a8 8 0 0 0 0 16m104 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M72 144a8 8 0 0 0 8-8V56a8 8 0 0 0-13.66-5.66l-40 40a8 8 0 0 0 0 11.32l40 40A8 8 0 0 0 72 144");
}
</style><path class="f_qdmjh6c"/>`,
		"fallback": "ph:text-outdent-fill",
	});
}

export default Component;
