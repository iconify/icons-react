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
		"content": `<style>.z1t5seblo {
  fill: currentColor;
  d: path("M3 3h2a1 1 0 0 1 .97.757L6.781 7H21a.998.998 0 0 1 .97 1.243l-2 8A1 1 0 0 1 19 17H8a1 1 0 0 1-.97-.757L4.219 5H3a1 1 0 0 1 0-2m4 17a2 2 0 1 1 3.999-.001A2 2 0 0 1 7 20m9 0a2 2 0 1 1 3.999-.001A2 2 0 0 1 16 20");
}
</style><path class="z1t5seblo"/>`,
		"fallback": "coolicons:shopping-cart-fill-sharp",
	});
}

export default Component;
