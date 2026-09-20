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
		"content": `<style>.gy18-zqeb {
  d: path("M14 19h7");
}

.lw01qcc3p {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M14 19h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xba5udboq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m4 5 7 7 -7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y0c1235en {
  d: path("m4 5 7 7 -7 7");
}
</style><g class="nrj6p8qat"><path class="xba5udboq"/><path class="lw01qcc3p"/><path class="y0c1235en"/><path class="gy18-zqeb"/></g>`,
		"fallback": "iconmind:shell-duotone-regular",
	});
}

export default Component;
