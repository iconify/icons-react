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
		"content": `<style>.nf3dnhbiy {
  stroke-opacity: 0.4;
  d: path("M15 7L18 7C19.6569 7 21 8.3431 21 10L21 18C21 19.6569 19.6569 21 18 21L10 21C8.3431 21 7 19.6569 7 18L7 15");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ziusd-tnj {
  d: path("M3 3L10.5 10.5M3 11L10.5 11C10.7761 11 11 10.7761 11 10.5L11 3");
}
</style><g class="nrj6p8qat"><path class="nf3dnhbiy"/><path class="ziusd-tnj"/></g>`,
		"fallback": "keyline-icons:square-arrow-in-down-right-duotone",
	});
}

export default Component;
