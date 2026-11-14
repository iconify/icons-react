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
		"content": `<style>.x7pcdhb9p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19M4 3.5V15a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 20 15V3.5m-8 13v4");
}
</style><path class="x7pcdhb9p"/>`,
		"fallback": "uix:projector-screen",
	});
}

export default Component;
