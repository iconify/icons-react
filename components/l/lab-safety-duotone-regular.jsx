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
		"content": `<style>.a0f0f2w0j {
  fill: currentColor;
  d: path("M11 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.gwnaabclj {
  d: path("M12 9v5");
}

.i_w2e0bxp {
  fill: currentColor;
  d: path("m12 3 9 16H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.me177l4bh {
  d: path("M11 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qk-gt2bvd {
  d: path("m12 3 9 16H3Z");
}
</style><g class="nrj6p8qat"><path class="i_w2e0bxp"/><path class="a0f0f2w0j"/><path class="qk-gt2bvd"/><path class="gwnaabclj"/><path class="me177l4bh"/></g>`,
		"fallback": "iconmind:lab-safety-duotone-regular",
	});
}

export default Component;
