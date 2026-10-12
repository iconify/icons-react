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
		"content": `<style>.gyt-x0byx {
  cx: 8.75px;
  cy: 8.75px;
  r: 3.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oi19_iuvc {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.75 8.75h.01");
}

.ov4y9abnf {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.75 5.75l-2-2m5 .75V2.75m-4.25 6H2.75m3 3l-2 2m8-8l2-2M12 12l5.75 5.75m0 0h3.5m-3.5 0v3.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="gyt-x0byx"/><path class="oi19_iuvc"/><path class="ov4y9abnf"/></g>`,
		"fallback": "iconoven:neuron",
	});
}

export default Component;
