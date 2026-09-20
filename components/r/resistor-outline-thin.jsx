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
		"content": `<style>.e0fatccfd {
  d: path("M18 12h4");
}

.h4br4z40f {
  d: path("M2 12h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hrjx5ybsq {
  d: path("M6 8h12v8H6Z");
}

.pkakcnb0w {
  d: path("m8 14 3 -3 3 3 2 -2");
}
</style><g class="hntgybcog"><path class="h4br4z40f"/><path class="hrjx5ybsq"/><path class="e0fatccfd"/><path class="pkakcnb0w"/></g>`,
		"fallback": "iconmind:resistor-outline-thin",
	});
}

export default Component;
