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
		"content": `<style>.duu12rf5n {
  d: path("M10 5.5v6");
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

.wqcl8_ygf {
  d: path("M14 5.5v6");
}

.xxf06_b4i {
  d: path("M8 8.5h8");
}
</style><g class="nrj6p8qat"><path class="n0n63pb2v"/><path class="duu12rf5n"/><path class="wqcl8_ygf"/><path class="xxf06_b4i"/></g>`,
		"fallback": "iconmind:memory-index-outline-regular",
	});
}

export default Component;
