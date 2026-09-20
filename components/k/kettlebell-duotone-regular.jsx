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
		"content": `<style>.f0a5f8upj {
  fill: currentColor;
  d: path("M7 7a8 8 0 1 0 10 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.iq_1-2byr {
  d: path("M7.5 6.5a4.5 4.5 0 0 1 9 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yef8t12oi {
  d: path("M7 7a8 8 0 1 0 10 0Z");
}
</style><g class="nrj6p8qat"><path class="f0a5f8upj"/><path class="yef8t12oi"/><path class="iq_1-2byr"/></g>`,
		"fallback": "iconmind:kettlebell-duotone-regular",
	});
}

export default Component;
