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
		"content": `<style>.bgb7sz9sx {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 6L19 6L19 20L5 20ZM5 11L19 11M7 20L7 23M17 20L17 23M8 6L9 2L15 2L16 6");
}
</style><path class="bgb7sz9sx"/>`,
		"fallback": "keyline-icons:luggage-sharp",
	});
}

export default Component;
