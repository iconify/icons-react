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
		"content": `<style>.lxix245uv {
  stroke-opacity: 0.4;
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t1x7x9bkv {
  d: path("M4 12a8 8 0 1 0 16 0a8 8 0 0 0-16 0");
}
</style><g class="nrj6p8qat"><path class="lxix245uv"/><path class="t1x7x9bkv"/></g>`,
		"fallback": "coolicons:radio-checked-duocolor",
	});
}

export default Component;
