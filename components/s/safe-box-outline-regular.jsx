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
		"content": `<style>.bwx0_w4fu {
  d: path("M18 10v4");
}

.lmbql1bue {
  d: path("M7 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xvfocab-p {
  d: path("m11 12 3 -3");
}

.zrwkhybyf {
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="zrwkhybyf"/><path class="lmbql1bue"/><path class="xvfocab-p"/><path class="bwx0_w4fu"/></g>`,
		"fallback": "iconmind:safe-box-outline-regular",
	});
}

export default Component;
