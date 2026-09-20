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
		"content": `<style>.m2hx0hb6o {
  fill: currentColor;
  d: path("M6 15h2.8l.75-.75v-4.5L8.8 9H6zm1.15-1.15v-3.7H8.4v3.7zm4.125 0v-1.3h1.3V11.4h-1.3v-1.25h2.05V9h-3.2v6h3.2v-1.15zm4.75-.75L14.95 9h-1.2l1.575 5.975h1.4L18.3 9h-1.2zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="m2hx0hb6o"/>`,
		"fallback": "material-symbols:logo-dev-outline-sharp",
	});
}

export default Component;
