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
		"content": `<style>.e3dol68is {
  d: path("M15 11v3");
}

.g85aieyzp {
  d: path("M11 9v5");
}

.nnzlfsekh {
  d: path("M2 8a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w28ybhbjm {
  d: path("M7 10v4");
}
</style><g class="nrj6p8qat"><path class="nnzlfsekh"/><path class="w28ybhbjm"/><path class="g85aieyzp"/><path class="e3dol68is"/></g>`,
		"fallback": "iconmind:metric-card-outline-regular",
	});
}

export default Component;
