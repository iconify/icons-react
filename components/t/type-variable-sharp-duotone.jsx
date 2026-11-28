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
		"content": `<style>.bacgkpfcb {
  d: path("M17 14L17 22");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wg667nbrk {
  stroke-opacity: 0.4;
  d: path("M6 7L6 3L18 3L18 7M12 3L12 11M8 11L16 11M2 18L14 18M22 18L17 18");
}
</style><g class="gp_8x1bzb"><path class="wg667nbrk"/><path class="bacgkpfcb"/></g>`,
		"fallback": "keyline-icons:type-variable-sharp-duotone",
	});
}

export default Component;
