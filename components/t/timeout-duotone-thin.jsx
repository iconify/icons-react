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

.jfgb4ctmg {
  d: path("m21 8 -4 4");
}

.nc5ku3b2p {
  d: path("m17 8 4 4");
}

.sl0tqnboi {
  d: path("M4 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.txx5uqbdb {
  fill: currentColor;
  d: path("M4 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yf0ac-1wm {
  d: path("M10 9v3h3");
}
</style><g class="hntgybcog"><path class="txx5uqbdb"/><path class="sl0tqnboi"/><path class="yf0ac-1wm"/><path class="nc5ku3b2p"/><path class="jfgb4ctmg"/></g>`,
		"fallback": "iconmind:timeout-duotone-thin",
	});
}

export default Component;
