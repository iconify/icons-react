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
		"content": `<style>.mn-a1zb6m {
  d: path("M3 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s25-orfog {
  d: path("M17 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.zesrtccnv {
  d: path("M10 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="nrj6p8qat"><path class="mn-a1zb6m"/><path class="zesrtccnv"/><path class="s25-orfog"/><path class="n0n63pb2v"/></g>`,
		"fallback": "iconmind:node-pool-outline-regular",
	});
}

export default Component;
