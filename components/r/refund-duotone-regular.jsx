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
		"content": `<style>.ji-xh3b0v {
  d: path("M8 10.5v3");
}

.k628-abaf {
  fill: currentColor;
  d: path("M3 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lh7nxd5dq {
  d: path("M3 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q4bb_8bsv {
  d: path("M21.5 9.5 19 12l2.5 2.5");
}

.z7yjp67_f {
  d: path("M18 9.5 15.5 12l2.5 2.5");
}
</style><g class="nrj6p8qat"><path class="k628-abaf"/><path class="lh7nxd5dq"/><path class="ji-xh3b0v"/><path class="z7yjp67_f"/><path class="q4bb_8bsv"/></g>`,
		"fallback": "iconmind:refund-duotone-regular",
	});
}

export default Component;
