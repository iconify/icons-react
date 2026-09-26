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

.uuiu-obsd {
  d: path("M6 10.5L6 13.5");
}

.wer251ban {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M1 15V9C1 6.23858 3.23858 4 6 4H18C20.7614 4 23 6.23858 23 9V15C23 17.7614 20.7614 20 18 20H6C3.23858 20 1 17.7614 1 15Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="wer251ban"/><path class="uuiu-obsd"/></g>`,
		"fallback": "keyline-icons:smartphone-horizontal-duotone",
	});
}

export default Component;
