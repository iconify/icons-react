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
		"content": `<style>.aff9hemvj {
  d: path("M9 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.fmr2g_bno {
  d: path("M3 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mz4c5lb-h {
  d: path("M15 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.osjmvib6z {
  d: path("M7 16a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}

.tdux9oy4s {
  d: path("M10 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="fmr2g_bno"/><path class="aff9hemvj"/><path class="mz4c5lb-h"/><path class="osjmvib6z"/><path class="tdux9oy4s"/></g>`,
		"fallback": "iconmind:token-price-outline-thin",
	});
}

export default Component;
