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
		"content": `<style>.d3xn50bni {
  d: path("M4 4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oy7fa3gbk {
  d: path("M8 2v20");
}

.wuktrpbtg {
  d: path("M11 15h8");
}

.zvb1nubon {
  d: path("M11 9a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="nrj6p8qat"><path class="d3xn50bni"/><path class="oy7fa3gbk"/><path class="zvb1nubon"/><path class="wuktrpbtg"/></g>`,
		"fallback": "iconmind:passport-outline-regular",
	});
}

export default Component;
