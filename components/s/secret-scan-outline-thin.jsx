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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.fhluz1bdh {
  d: path("M11 12h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lit5ttzxc {
  d: path("M8 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.u_pj2bc5e {
  d: path("M14.5 12v2.5");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="lit5ttzxc"/><path class="fhluz1bdh"/><path class="u_pj2bc5e"/></g>`,
		"fallback": "iconmind:secret-scan-outline-thin",
	});
}

export default Component;
