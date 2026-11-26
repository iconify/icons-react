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
		"content": `<style>.omwx48bit {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 8L18 4L6 4L6 8M15.6667 20L14 8M8.3333 20L10 8M6 8L2.0025 20L8.3333 20L15.6667 20L21.9975 20L18 8M6 8L10 8L14 8L18 8");
}
</style><path class="omwx48bit"/>`,
		"fallback": "keyline-icons:skirt-sharp",
	});
}

export default Component;
