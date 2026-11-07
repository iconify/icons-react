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
		"content": `<style>.phg6yebbo {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2a1 1 0 0 1 0 2a7.9 7.9 0 0 0-3.114.628a8 8 0 0 0-2.543 1.715a8 8 0 0 0-2.194 7.194a7.99 7.99 0 0 0 4.737 5.835a7.99 7.99 0 0 0 8.771-1.715A7.97 7.97 0 0 0 20 12a1 1 0 0 1 2 0c0 5.523-4.477 10-10 10S2 17.523 2 12");
}
</style><path class="phg6yebbo"/>`,
		"fallback": "coolicons:spinner-fill-round",
	});
}

export default Component;
