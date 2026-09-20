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
		"content": `<style>.cczmbdb1w {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 16.5h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.che9juhmb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 7.5h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dezc-zb_n {
  d: path("M2 16.5h20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mypzt1bhf {
  fill: currentColor;
  d: path("M14 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n0hr0gbrt {
  d: path("M14 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ombslrhta {
  d: path("M2 7.5h20");
}

.xgscl2bdj {
  fill: currentColor;
  d: path("M6 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zirb-hbnv {
  d: path("M6 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="xgscl2bdj"/><path class="mypzt1bhf"/><path class="che9juhmb"/><path class="cczmbdb1w"/><path class="ombslrhta"/><path class="dezc-zb_n"/><path class="zirb-hbnv"/><path class="n0hr0gbrt"/></g>`,
		"fallback": "iconmind:transport-duotone-thin",
	});
}

export default Component;
