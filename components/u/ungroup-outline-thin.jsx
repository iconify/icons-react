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

.htj7d_25n {
  d: path("M2 4a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.k5psmhbss {
  d: path("m16 16 -2.5 -2.5");
}

.wr_ld5s1h {
  d: path("M17 19.5a2.5 2.5 0 0 1 2.5 -2.5 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5 2.5 2.5 0 0 1 -2.5 -2.5");
}
</style><g class="hntgybcog"><path class="htj7d_25n"/><path class="wr_ld5s1h"/><path class="k5psmhbss"/></g>`,
		"fallback": "iconmind:ungroup-outline-thin",
	});
}

export default Component;
