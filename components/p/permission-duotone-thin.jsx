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
		"content": `<style>.bpdfs5b6a {
  d: path("m9 15 2 2 4 -4");
}

.bvtl4wbkp {
  d: path("M6 12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jvx_plbex {
  fill: currentColor;
  d: path("M6 12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ltriwmbuu {
  d: path("M8 10a4 4 0 0 1 8 0");
}
</style><g class="hntgybcog"><path class="jvx_plbex"/><path class="bvtl4wbkp"/><path class="ltriwmbuu"/><path class="bpdfs5b6a"/></g>`,
		"fallback": "iconmind:permission-duotone-thin",
	});
}

export default Component;
