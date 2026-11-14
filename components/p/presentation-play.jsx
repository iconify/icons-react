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
		"content": `<style>.i7ps97brt {
  fill: currentColor;
  d: path("m10.25 7.25l4.5 2.5l-4.5 2.5Z");
}

.s38jnmk1l {
  d: path("M2.5 3.5h19M4 3.5V16h16V3.5m-11.5 18L12 16l3.5 5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s38jnmk1l"/><path class="i7ps97brt"/></g>`,
		"fallback": "uix-sharp:presentation-play",
	});
}

export default Component;
