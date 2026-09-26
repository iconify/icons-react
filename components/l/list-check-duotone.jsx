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

.ryvt14b8p {
  stroke-opacity: 0.4;
  d: path("M2 4L22 4M2 11L22 11");
}

.xi2kx1b1h {
  d: path("M2 18L6 18M10 18L14 18M18 18L20 20L22 16");
}
</style><g class="nrj6p8qat"><path class="ryvt14b8p"/><path class="xi2kx1b1h"/></g>`,
		"fallback": "keyline-icons:list-check-duotone",
	});
}

export default Component;
