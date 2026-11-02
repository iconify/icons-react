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

.qyxh9bbtn {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m12.536-3.536a5 5 0 1 0-7.072 7.071a5 5 0 0 0 7.072-7.07");
}

.ujwe07b4z {
  stroke-opacity: 0.4;
  d: path("m12 12l3.536-3.536m0 0l2.828-2.828");
}
</style><g class="nrj6p8qat"><path class="ujwe07b4z"/><path class="qyxh9bbtn"/></g>`,
		"fallback": "coolicons:radar-duocolor",
	});
}

export default Component;
