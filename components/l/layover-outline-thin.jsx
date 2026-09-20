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
		"content": `<style>.brjpv3b7t {
  d: path("M17.5 6.5V11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m5hpqyobl {
  d: path("M9.5 9.5h5l-5 5h5Z");
}

.okud9xj_d {
  d: path("M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.raivi4yli {
  d: path("M17.5 13v4.5");
}
</style><g class="hntgybcog"><path class="okud9xj_d"/><path class="brjpv3b7t"/><path class="raivi4yli"/><path class="m5hpqyobl"/></g>`,
		"fallback": "iconmind:layover-outline-thin",
	});
}

export default Component;
