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
		"content": `<style>.bzecsub_a {
  d: path("M8 12h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mjxjq9e4f {
  d: path("M8 5h12");
}

.oeboj9bgs {
  d: path("m3 9 3 3 -3 3Z");
}

.y_or9-s0p {
  d: path("M8 19h12");
}
</style><g class="hntgybcog"><path class="mjxjq9e4f"/><path class="bzecsub_a"/><path class="y_or9-s0p"/><path class="oeboj9bgs"/></g>`,
		"fallback": "iconmind:test-select-outline-thin",
	});
}

export default Component;
