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

.p5wx9u1ot {
  fill: currentColor;
  d: path("M11 2C15.9706 2 20 6.0294 20 11C20 15.9706 15.9706 20 11 20C6.0294 20 2 15.9706 2 11C2 6.0294 6.0294 2 11 2Z");
  stroke: none;
}

.rimuh7bpm {
  d: path("M17 17L21 21");
}
</style><g class="nrj6p8qat"><path class="p5wx9u1ot"/><path class="rimuh7bpm"/></g>`,
		"fallback": "keyline-icons:search-2-fill",
	});
}

export default Component;
