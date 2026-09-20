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

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}

.t8vqbjbxj {
  d: path("M4 7c5 2 8 7 8 14");
}

.zhy5nnbig {
  fill: currentColor;
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zsqyjcb8w {
  d: path("M20 7c-5 2 -8 7 -8 14");
}
</style><g class="nrj6p8qat"><path class="zhy5nnbig"/><path class="o_ssmh9ez"/><path class="t8vqbjbxj"/><path class="zsqyjcb8w"/></g>`,
		"fallback": "iconmind:tennis-duotone-regular",
	});
}

export default Component;
