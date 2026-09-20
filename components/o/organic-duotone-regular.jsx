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
		"content": `<style>.hc_p61b5u {
  d: path("M7 17c0 -6 4 -10 10 -10 0 6 -4 10 -10 10");
}

.lpfdprsco {
  fill: currentColor;
  d: path("M7 17c0 -6 4 -10 10 -10 0 6 -4 10 -10 10");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}

.zhy5nnbig {
  fill: currentColor;
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="zhy5nnbig"/><path class="lpfdprsco"/><path class="o_ssmh9ez"/><path class="hc_p61b5u"/></g>`,
		"fallback": "iconmind:organic-duotone-regular",
	});
}

export default Component;
