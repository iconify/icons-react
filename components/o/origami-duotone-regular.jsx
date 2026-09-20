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
		"content": `<style>.fq7shjbor {
  d: path("M3 14h18c-1 3 -4 6 -9 6s-8 -3 -9 -6");
}

.mc1e3dblj {
  fill: currentColor;
  d: path("M3 14h18c-1 3 -4 6 -9 6s-8 -3 -9 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mzp9zz-op {
  d: path("M11 11V3l8 8Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r23rcibvv {
  fill: currentColor;
  d: path("M11 11V3l8 8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="mc1e3dblj"/><path class="r23rcibvv"/><path class="fq7shjbor"/><path class="mzp9zz-op"/></g>`,
		"fallback": "iconmind:origami-duotone-regular",
	});
}

export default Component;
