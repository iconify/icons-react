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
		"content": `<style>.a9_g1_bko {
  d: path("M5 18V22");
}

.btex5sb2a {
  d: path("M19 2V22");
}

.h3s_qfbzc {
  d: path("M5 12H19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q11q8pbau {
  d: path("M5 2V14");
}
</style><g class="hntgybcog"><path class="q11q8pbau"/><path class="a9_g1_bko"/><path class="btex5sb2a"/><path class="h3s_qfbzc"/></g>`,
		"fallback": "solar:text-heading-broken",
	});
}

export default Component;
