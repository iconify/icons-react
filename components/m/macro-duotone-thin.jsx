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
		"content": `<style>.aa-4hgzip {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m15 9 -3 3h2.5l-3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c2-gs7b7d {
  d: path("m15 9 -3 3h2.5l-3 3");
}

.d6cu3qpew {
  d: path("M17 3h4v18h-4");
}

.eh---ab1x {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M17 3h4v18h-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ldodvk1_f {
  d: path("M7 3H3v18h4");
}

.r1p5_ebae {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 3H3v18h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="r1p5_ebae"/><path class="eh---ab1x"/><path class="aa-4hgzip"/><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="c2-gs7b7d"/></g>`,
		"fallback": "iconmind:macro-duotone-thin",
	});
}

export default Component;
