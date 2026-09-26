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
		"content": `<style>.a29802lgu {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5808 18.7624L5 21L4.5686 16.353C2.915 14.8839 2 12.9769 2 11C2 6.5817 6.4772 3 12 3C17.5228 3 22 6.5817 22 11C22 15.4183 17.5228 19 12 19C11.1845 19 10.3721 18.9202 9.5808 18.7624ZM12 7.0093L13.428 9.572L15.9907 11L13.428 12.428L12 14.9907L10.572 12.428L8.0093 11L10.572 9.572L12 7.0093Z");
}
</style><path class="a29802lgu"/>`,
		"fallback": "keyline-icons:message-sparkle-sharp",
	});
}

export default Component;
