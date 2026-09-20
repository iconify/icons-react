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
		"content": `<style>.ddr0zpdgr {
  d: path("M8 6a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.eev_c9mlp {
  d: path("m7 20 5 -5 5 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n-fiqpbfy {
  d: path("M12 10v5");
}

.uxyzhxvwz {
  d: path("M7 12h10");
}
</style><g class="hntgybcog"><path class="ddr0zpdgr"/><path class="n-fiqpbfy"/><path class="uxyzhxvwz"/><path class="eev_c9mlp"/></g>`,
		"fallback": "iconmind:toddler-outline-thin",
	});
}

export default Component;
