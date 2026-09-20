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
		"content": `<style>.a5svpccsg {
  d: path("M5 9v9h11V9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l3bfc0bau {
  fill: currentColor;
  d: path("M8 2h5v3H8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s7yzvqbuw {
  d: path("M8 2h5v3H8Z");
}

.xl83b8b9f {
  d: path("M10 9V5");
}
</style><g class="hntgybcog"><path class="l3bfc0bau"/><path class="a5svpccsg"/><path class="xl83b8b9f"/><path class="s7yzvqbuw"/></g>`,
		"fallback": "iconmind:tea-cup-duotone-thin",
	});
}

export default Component;
