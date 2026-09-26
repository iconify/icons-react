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
		"content": `<style>.sov4fmbdd {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 10L21 10L21 21L18 18L12 18L12 10ZM6.2929 12.7071L3 16L3 3L17 3");
}
</style><path class="sov4fmbdd"/>`,
		"fallback": "keyline-icons:messages-square-sharp",
	});
}

export default Component;
