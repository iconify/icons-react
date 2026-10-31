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
		"content": `<style>.e5lg4pb1s {
  stroke-opacity: 0.4;
  d: path("M2 20C3.821 17.3333 5.179 17.3333 7 20C8.821 22.6667 10.179 22.6667 12 20C13.821 17.3333 15.179 17.3333 17 20C18.821 22.6667 20.179 22.6667 22 20");
}

.hn_jaab5q {
  d: path("M8 14L8 4C8 2.8954 7.1046 2 6 2C4.8954 2 4 2.8954 4 4M16 14L16 4C16 2.8954 15.1046 2 14 2C12.8954 2 12 2.8954 12 4M8 8L16 8M8 12L16 12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="e5lg4pb1s"/><path class="hn_jaab5q"/></g>`,
		"fallback": "keyline-icons:waves-ladder-duotone",
	});
}

export default Component;
