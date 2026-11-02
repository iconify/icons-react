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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.le6np1m8e {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 6v12c0 .738-.631 1.369-1 1l-2-2c-.64-.64-1.36-1-2-1H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1c.64 0 1.36-.36 2-1l2-2c.369-.369 1 .262 1 1m4 6h6m-3-3v6");
}

.z742pybpy {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M11 18c0 .738-.631 1.369-1 1l-2-2c-.521-.52-1.237-1-2-1H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1c.763 0 1.479-.48 2-1l2-2c.369-.369 1 .262 1 1Z");
}
</style><g class="ft5dv1b6b"><path class="z742pybpy"/><path class="le6np1m8e"/></g>`,
		"fallback": "coolicons:volume-plus-duotone",
	});
}

export default Component;
