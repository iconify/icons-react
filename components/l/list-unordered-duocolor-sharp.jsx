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
		"content": `<style>.l0ibohb7c {
  d: path("M9 7h10M9 12h10M9 17h10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x8sqkdfzp {
  stroke-opacity: 0.4;
  d: path("M5 7h.01M5 12h.01M5 17h.01");
}
</style><g class="nrj6p8qat"><path class="x8sqkdfzp"/><path class="l0ibohb7c"/></g>`,
		"fallback": "coolicons:list-unordered-duocolor-sharp",
	});
}

export default Component;
