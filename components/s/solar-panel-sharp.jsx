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
		"content": `<style>.mxe1ffbsi {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 3L18 3L22 15L2 15ZM10 3L8.6667 15M14 3L15.3333 15M4 9L20 9M12 15L12 21M7 21L17 21");
}
</style><path class="mxe1ffbsi"/>`,
		"fallback": "keyline-icons:solar-panel-sharp",
	});
}

export default Component;
