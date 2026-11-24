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

.o0kaf7zae {
  d: path("M9 12h6l3 9H6zm-2 0h10m-8 0V8H8l4-4l4 4h-1v4M3 21h18M7 18l9-3");
}

.som-gobdx {
  stroke-opacity: 0.4;
  d: path("M3 9h2m14 0h2");
}
</style><g class="nrj6p8qat"><path class="som-gobdx"/><path class="o0kaf7zae"/></g>`,
		"fallback": "coolicons:lighthouse-duocolor-sharp",
	});
}

export default Component;
