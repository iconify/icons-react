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
		"content": `<style>.a7atf6mtg {
  fill: currentColor;
  d: path("M4 12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1m15 6h-2V7.38L14 8.4V6.7L18.7 5h.3z");
}
</style><path class="a7atf6mtg"/>`,
		"fallback": "ic:round-exposure-neg-1",
	});
}

export default Component;
