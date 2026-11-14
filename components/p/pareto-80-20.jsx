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
		"content": `<style>.g94bczb5s {
  fill: currentColor;
  d: path("M3 8h2.5v13H3Zm5 3h2.5v10H8Zm5 3h2.5v7H13Zm5 2h2.5v5H18Z");
}

.ujzcsac9r {
  d: path("M4.25 5C8 3.25 13 2.5 20.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g94bczb5s"/><path class="ujzcsac9r"/></g>`,
		"fallback": "uix-sharp:pareto-80-20",
	});
}

export default Component;
