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
		"content": `<style>.fvq602bgm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 4C10.6569 4 12 5.3431 12 7C12 8.6569 10.6569 10 9 10C7.3432 10 6 8.6569 6 7C6 5.3431 7.3432 4 9 4ZM10 21L3 21C2.4477 21 2 20.5523 2 20C2 16.6863 4.6863 14 8 14L10 14M18 21C16.175 19.4846 14 18.1806 14 16.2361C14 15.0011 15.0745 14 16.4 14C17 14 17.537 14.2123 18 14.5833C18.463 14.2123 19 14 19.6 14C20.9255 14 22 15.0011 22 16.2361C22 18.1806 19.825 19.4846 18 21Z");
}
</style><path class="fvq602bgm"/>`,
		"fallback": "keyline-icons:user-heart",
	});
}

export default Component;
