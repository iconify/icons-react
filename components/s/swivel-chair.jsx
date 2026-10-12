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
		"content": `<style>.mxwzbwbcg {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 20.5h.01m5.49 0h.01m5.49 0h.01");
}

.pg-itbbkk {
  width: 9.5px;
  height: 7.5px;
  x: 7.25px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ylj6dov_e {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 10.25v3.25M5.25 10v3.5h13.5V10M12 13.5V18m-5.5 0h11");
}
</style><g class="y9tr6bcfx"><rect class="pg-itbbkk"/><path class="ylj6dov_e"/><path class="mxwzbwbcg"/></g>`,
		"fallback": "iconoven:swivel-chair",
	});
}

export default Component;
