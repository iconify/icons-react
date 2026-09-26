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
		"content": `<style>.msppc204j {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 2L2 8.4561L2 22L22 22L22 8.4561L12 2ZM2 10L12 17.1428L22 10");
}
</style><path class="msppc204j"/>`,
		"fallback": "keyline-icons:mail-open-sharp",
	});
}

export default Component;
