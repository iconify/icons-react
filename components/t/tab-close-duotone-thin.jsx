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
		"content": `<style>.b4nrz0b6r {
  d: path("m20.5 10.5 -5 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ior14cbcm {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 19h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lid4b7x8u {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 19V9l2 -2h6l2 2v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oh3t_sdfd {
  d: path("m15.5 10.5 5 5");
}

.oscmqi7_r {
  d: path("M2 19V9l2 -2h6l2 2v10");
}

.pu39tea_e {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m15.5 10.5 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z9ittvbis {
  d: path("M2 19h20");
}

.zb7x15uln {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m20.5 10.5 -5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="lid4b7x8u"/><path class="ior14cbcm"/><path class="pu39tea_e"/><path class="zb7x15uln"/><path class="oscmqi7_r"/><path class="z9ittvbis"/><path class="oh3t_sdfd"/><path class="b4nrz0b6r"/></g>`,
		"fallback": "iconmind:tab-close-duotone-thin",
	});
}

export default Component;
