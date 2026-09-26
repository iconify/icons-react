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
		"content": `<style>.ksuggwa2t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 13C20 17.9706 15.9706 22 11 22C6.0294 22 2 17.9706 2 13C2 8.0294 6.0294 4 11 4C8.9618 6.5477 9.1652 10.2206 11.4723 12.5277C13.7794 14.8348 17.4523 15.0382 20 13ZM18.9689 2L18.9689 9M15.9378 3.75L22 7.25M22 3.75L15.9378 7.25");
}
</style><path class="ksuggwa2t"/>`,
		"fallback": "keyline-icons:moon-star",
	});
}

export default Component;
