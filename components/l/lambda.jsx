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
		"content": `<style>.he-dfsxah {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3.75H7c1.5 0 2.5.75 3 2l6.25 14.5h2.25m-6.75-10l-6.25 10");
}
</style><path class="he-dfsxah"/>`,
		"fallback": "iconoven:lambda",
	});
}

export default Component;
