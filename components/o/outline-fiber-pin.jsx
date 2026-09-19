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
		"content": `<style>.vxt_qhb9a {
  fill: currentColor;
  d: path("M11 15h1.5V9H11zm7.75-6v3.5L16.25 9H15v6h1.25v-3.5L18.8 15H20V9zM7.5 9H4v6h1.5v-2h2c.85 0 1.5-.65 1.5-1.5v-1C9 9.65 8.35 9 7.5 9m0 2.5h-2v-1h2z");
}
</style><path class="vxt_qhb9a"/>`,
		"fallback": "ic:outline-fiber-pin",
	});
}

export default Component;
