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
		"content": `<style>.cnr6orgbn {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 6.0006L14.1469 9.8531L17.9994 12L14.1469 14.1469L12 17.9994L9.8531 14.1469L6.0006 12L9.8531 9.8531ZM3 9L3 8L3 3L8 3L9 3M15 3L16 3L21 3L21 8L21 9M21 15L21 16L21 21L16 21L15 21M9 21L8 21L3 21L3 16L3 15");
}
</style><path class="cnr6orgbn"/>`,
		"fallback": "keyline-icons:scan-sparkle-sharp",
	});
}

export default Component;
