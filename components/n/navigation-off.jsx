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
		"content": `<style>.tqset-h-y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.39 3.67l6.72 15.91q.39.92-.5.47l-5.72-2.85q-.89-.45-1.78 0l-5.72 2.85q-.89.45-.5-.47l6.72-15.91q.39-.92.78 0");
}
</style><path class="tqset-h-y"/>`,
		"fallback": "iconoven:navigation-off",
	});
}

export default Component;
