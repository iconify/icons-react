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

.lit5ttzxc {
  d: path("M8 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t8kqz8rva {
  fill: currentColor;
  d: path("M8 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.u_pj2bc5e {
  d: path("M14.5 12v2.5");
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="yxow7abeb"/><path class="t8kqz8rva"/><path class="abnm6smsv"/><path class="lit5ttzxc"/><path class="fhluz1bdh"/><path class="u_pj2bc5e"/></g>`,
		"fallback": "iconmind:secret-scan-duotone-regular",
	});
}

export default Component;
