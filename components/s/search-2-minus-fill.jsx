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
		"content": `<style>.bm2qq7b1z {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M20 11C20 15.9706 15.9706 20 11 20C6.0294 20 2 15.9706 2 11C2 6.0294 6.0294 2 11 2C15.9706 2 20 6.0294 20 11ZM8 12L14 12C14.5523 12 15 11.5523 15 11C15 10.4477 14.5523 10 14 10L8 10C7.4477 10 7 10.4477 7 11C7 11.5523 7.4477 12 8 12Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rimuh7bpm {
  d: path("M17 17L21 21");
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="bm2qq7b1z"/><path class="rimuh7bpm"/></g>`,
		"fallback": "keyline-icons:search-2-minus-fill",
	});
}

export default Component;
