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
		"content": `<style>.cxjghxphb {
  d: path("M2.5 11.5V10c0-3.5 4-5 9.5-5s9.5 1.5 9.5 5v1.5Z");
}

.l1ica7baw {
  d: path("M4.75 13.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm10 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM3 21l1-2.75M7 21l1-2.75M11 21l1-2.75M15 21l1-2.75M19 21l1-2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cxjghxphb"/><path class="l1ica7baw"/></g>`,
		"fallback": "uix-sharp:robot-lawn-mower",
	});
}

export default Component;
