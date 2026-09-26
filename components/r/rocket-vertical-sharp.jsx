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
		"content": `<style>.naqf3ti0v {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.3652 20.8056L14.6348 20.8056L15.8292 22L19 16.1684L15.9523 13.1206C16.0677 12.4475 16.1257 11.7657 16.1257 11.0828C16.1257 7.6016 14.6216 4.2903 12 1.9999C9.3784 4.2903 7.8743 7.6016 7.8743 11.0828C7.8743 11.7657 7.9323 12.4475 8.0477 13.1206L5 16.1684L8.1708 22L9.3652 20.8056ZM14.6348 20.8056L15.9523 13.1206M9.3652 20.8056L8.0477 13.1206");
}
</style><path class="naqf3ti0v"/>`,
		"fallback": "keyline-icons:rocket-vertical-sharp",
	});
}

export default Component;
