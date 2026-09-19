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
		"content": `<style>.l8n8h4mra {
  fill: currentColor;
  d: path("M12.79 3H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2s2-.9 2-2v-4h3c3.57 0 6.42-3.13 5.95-6.79C18.56 5.19 15.84 3 12.79 3m.41 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2");
}
</style><path class="l8n8h4mra"/>`,
		"fallback": "ic:round-local-parking",
	});
}

export default Component;
