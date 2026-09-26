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
		"content": `<style>.ydc7yznbo {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 4L2 2L9 2L9 8L7.0953 9.4285C8.5144 12.802 11.198 15.4856 14.5715 16.9047L16 15L22 15L22 22L20 22C10.0589 22 2 13.9411 2 4ZM21.8536 2.1464L16.7071 7.2929M22 9L22 2L15 2");
}
</style><path class="ydc7yznbo"/>`,
		"fallback": "keyline-icons:phone-outgoing-sharp",
	});
}

export default Component;
