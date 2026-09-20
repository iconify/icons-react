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
		"content": `<style>.mfy_8bc4r {
  fill: currentColor;
  d: path("M216 36h-64a4 4 0 0 0-3.17 1.56l-66.78 86.82l-12.86-12.86a12 12 0 0 0-17 0l-12.67 12.69a12 12 0 0 0 0 17L62.34 164l-30.82 30.83a12 12 0 0 0 0 17l12.68 12.66a12 12 0 0 0 17 0L92 193.67l22.81 22.82a12 12 0 0 0 17 0l12.69-12.7a12 12 0 0 0 0-17L131.62 174l86.82-66.79A4 4 0 0 0 220 104V40a4 4 0 0 0-4-4M55.52 218.83a4 4 0 0 1-5.66 0l-12.69-12.68a4 4 0 0 1 0-5.66L68 169.67L86.34 188Zm83.31-26.36a4 4 0 0 1 0 5.67l-12.7 12.69a4 4 0 0 1-5.66 0l-75.3-75.3a4 4 0 0 1 0-5.66l12.7-12.69a4 4 0 0 1 5.66 0ZM212 102l-86.08 66.22L109.66 152l53.17-53.17a4 4 0 1 0-5.66-5.66L104 146.34l-16.25-16.26L154 44h58Z");
}
</style><path class="mfy_8bc4r"/>`,
		"fallback": "ph:sword-thin",
	});
}

export default Component;
