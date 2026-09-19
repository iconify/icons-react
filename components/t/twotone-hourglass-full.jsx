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
		"content": `<style>.jtowclbnw {
  fill: currentColor;
  d: path("M18 2H6v6h.01L6 8.01L10 12l-4 4l.01.01H6V22h12v-5.99h-.01L18 16l-4-4l4-3.99l-.01-.01H18zm-2 14.5V20H8v-3.5l4-4zm0-9l-4 4l-4-4V4h8z");
}

.smjt46b7k {
  fill: currentColor;
  d: path("m8 7.5l4 4l4-4V4H8zm0 9V20h8v-3.5l-4-4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="smjt46b7k"/><path class="jtowclbnw"/>`,
		"fallback": "ic:twotone-hourglass-full",
	});
}

export default Component;
