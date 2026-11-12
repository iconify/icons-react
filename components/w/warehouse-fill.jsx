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
		"content": `<style>.iimbz4s0a {
  fill: currentColor;
  d: path("M21 22h-5v-9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v9H3a1 1 0 0 1 0-2h1v-9c.001-1.348 1.478-2.357 2.553-2.894l4-2A1 1 0 0 1 11 6h2c.155 0 .308.036.447.106l4 2C18.522 8.643 19.999 9.652 20 11v9h1a1 1 0 0 1 0 2m-8-6h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2m0 4h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2");
}
</style><path class="iimbz4s0a"/>`,
		"fallback": "coolicons:warehouse-fill",
	});
}

export default Component;
