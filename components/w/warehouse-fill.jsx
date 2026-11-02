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
		"content": `<style>.zz_5n6byg {
  fill: currentColor;
  d: path("M16 22v-5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v5H3a1 1 0 0 1 0-2h1v-9c.001-1.348 1.478-2.357 2.553-2.894l4-2A1 1 0 0 1 11 6h2c.155 0 .308.036.447.106l4 2C18.522 8.643 19.999 9.652 20 11v9h1a1 1 0 0 1 0 2Zm0-9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z");
}
</style><path class="zz_5n6byg"/>`,
		"fallback": "coolicons:warehouse-fill",
	});
}

export default Component;
