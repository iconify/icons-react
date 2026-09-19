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
		"content": `<style>.ubjs4kbrj {
  fill: currentColor;
  d: path("M19 7V4H5v3H2v13h8v-4h4v4h8V7zm1 11h-4v-4H8v4H4V9h3V6h10v3h3zM8 8h2v1H8v3h3v-1H9v-1h2V7H8zm7 1h-1V7h-1v3h2v2h1V7h-1z");
}
</style><path class="ubjs4kbrj"/>`,
		"fallback": "ic:outline-local-convenience-store",
	});
}

export default Component;
