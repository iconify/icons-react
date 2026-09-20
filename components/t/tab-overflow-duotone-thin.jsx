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
		"content": `<style>.ec5tld62j {
  d: path("M17 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.gju7e2bvn {
  d: path("M20 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
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

.oscmqi7_r {
  d: path("M2 19V9l2 -2h6l2 2v10");
}

.rxfmyhero {
  fill: currentColor;
  d: path("M20 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.tyien_b-s {
  fill: currentColor;
  d: path("M14 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.y1xrshbyn {
  fill: currentColor;
  d: path("M17 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yegul17ht {
  d: path("M14 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="hntgybcog"><path class="tyien_b-s"/><path class="y1xrshbyn"/><path class="rxfmyhero"/><path class="lid4b7x8u"/><path class="ior14cbcm"/><path class="oscmqi7_r"/><path class="z9ittvbis"/><path class="yegul17ht"/><path class="ec5tld62j"/><path class="gju7e2bvn"/></g>`,
		"fallback": "iconmind:tab-overflow-duotone-thin",
	});
}

export default Component;
