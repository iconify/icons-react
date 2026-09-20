import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w0-_wpqrg {
  fill: currentColor;
  d: path("M8.5 13.5a1.5 1.5 0 0 0 3 0V9h2.307a1.5 1.5 0 0 1 1.405.974l2.25 6A1.5 1.5 0 0 1 16.058 18H3.943a1.5 1.5 0 0 1-1.404-2.026l2.25-6A1.5 1.5 0 0 1 6.193 9H8.5zM10 2a2.5 2.5 0 0 1 .5 4.95v6.55a.5.5 0 0 1-1 0V6.95A2.5 2.5 0 0 1 10 2");
}
</style><path class="w0-_wpqrg"/>`,
		"fallback": "fluent:map-pin-20-filled",
	});
}

export default Component;
