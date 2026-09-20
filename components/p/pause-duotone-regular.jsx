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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pzyzl_b-w {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s7eyaw7qq {
  d: path("M15 4v16");
}

.t87ohzbeq {
  d: path("M9 4v16");
}

.tqe2jhbja {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="tqe2jhbja"/><path class="pzyzl_b-w"/><path class="t87ohzbeq"/><path class="s7eyaw7qq"/></g>`,
		"fallback": "iconmind:pause-duotone-regular",
	});
}

export default Component;
