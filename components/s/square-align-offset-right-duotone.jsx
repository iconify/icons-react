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
		"content": `<style>.b1z4meb2q {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M18 2C20.2091 2 22 3.79086 22 6L22 18C22 20.2091 20.2091 22 18 22L6 22C3.79086 22 2 20.2091 2 18L2 6C2 3.79086 3.79086 2 6 2L18 2Z");
  stroke: none;
}

.l135sbc_b {
  d: path("M16 8V13M8 14V16M12 16V9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="b1z4meb2q"/><path class="l135sbc_b"/></g>`,
		"fallback": "keyline-icons:square-align-offset-right-duotone",
	});
}

export default Component;
