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
		"content": `<style>.f69868bpf {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 5c1.317 0 2.748.335 3.707 1.293l2 2a5.243 5.243 0 0 1-7.414 7.414l-2-2C2.335 12.748 2 11.317 2 10V9a4 4 0 0 1 4-4Z");
}

.ft5dv1b6b {
  fill: none;
}

.gmlax7b8r {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6h1c1.28 0 2.36.36 3 1l2 2a4.243 4.243 0 0 1-6 6l-2-2c-.64-.64-1-1.72-1-3V9a3 3 0 0 1 3-3m1 4h.01M15 6l3 3a4.243 4.243 0 0 1 0 6l-3 3");
}
</style><g class="ft5dv1b6b"><path class="f69868bpf"/><path class="gmlax7b8r"/></g>`,
		"fallback": "coolicons:tags-duotone-round",
	});
}

export default Component;
