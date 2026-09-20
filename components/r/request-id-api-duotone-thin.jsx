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
		"content": `<style>.d6cu3qpew {
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

.kl5egs07h {
  d: path("M9.5 12.5 12 15l2.5 -2.5");
}

.ldodvk1_f {
  d: path("M7 3H3v18h4");
}

.nbil0n-ak {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9.5 12.5 12 15l2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r1p5_ebae {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 3H3v18h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tzxtpfb7v {
  fill: currentColor;
  d: path("M10 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zohykibek {
  d: path("M10 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="tzxtpfb7v"/><path class="r1p5_ebae"/><path class="eh---ab1x"/><path class="nbil0n-ak"/><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="zohykibek"/><path class="kl5egs07h"/></g>`,
		"fallback": "iconmind:request-id-api-duotone-thin",
	});
}

export default Component;
