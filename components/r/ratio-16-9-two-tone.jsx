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
		"content": `<style>.eyqg9fbpu {
  d: path("M2 9C2 7.3431 3.3431 6 5 6L19 6C20.6569 6 22 7.3431 22 9L22 15C22 16.6569 20.6569 18 19 18L5 18C3.3431 18 2 16.6569 2 15L2 9Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qqedaiivb {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M1 9C1 6.7909 2.7909 5 5 5L19 5C21.2091 5 23 6.7909 23 9L23 15C23 17.2091 21.2091 19 19 19L5 19C2.7909 19 1 17.2091 1 15L1 9Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="qqedaiivb"/><path class="eyqg9fbpu"/></g>`,
		"fallback": "keyline-icons:ratio-16-9-two-tone",
	});
}

export default Component;
