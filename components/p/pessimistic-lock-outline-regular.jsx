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
		"content": `<style>.buvqhc29l {
  d: path("M2 15a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.cyvvfd0tv {
  d: path("M9 3a3 3 0 0 1 6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pmuiqo95v {
  d: path("M2 17h20");
}

.rqp8h2nfx {
  d: path("M8 5a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="rqp8h2nfx"/><path class="cyvvfd0tv"/><path class="buvqhc29l"/><path class="pmuiqo95v"/></g>`,
		"fallback": "iconmind:pessimistic-lock-outline-regular",
	});
}

export default Component;
