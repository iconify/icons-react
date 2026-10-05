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
		"content": `<style>.le6weybbq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 4L14 4C15.6569 4 17 5.3431 17 7L17 17C17 18.6569 15.6569 20 14 20L10 20C8.3431 20 7 18.6569 7 17L7 7C7 5.3431 8.3431 4 10 4ZM11 8L13 8M21.3675 8.5C21.7858 9.6195 22 10.8049 22 12C22 13.1951 21.7858 14.3805 21.3675 15.5M2.6325 15.5C2.2142 14.3805 2 13.1951 2 12C2 10.8049 2.2142 9.6195 2.6325 8.5");
}
</style><path class="le6weybbq"/>`,
		"fallback": "keyline-icons:smartphone-ringing",
	});
}

export default Component;
