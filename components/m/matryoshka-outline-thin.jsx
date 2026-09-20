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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n3p0zmbop {
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ra5uied2u {
  d: path("m12 7.5 4.5 4.5 -4.5 4.5L7.5 12Z");
}

.x6ma3nbxt {
  d: path("m12 3 9 9 -9 9 -9 -9Z");
}
</style><g class="hntgybcog"><path class="x6ma3nbxt"/><path class="ra5uied2u"/><path class="n3p0zmbop"/></g>`,
		"fallback": "iconmind:matryoshka-outline-thin",
	});
}

export default Component;
