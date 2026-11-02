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
		"content": `<style>.ca-l0ibtt {
  fill: currentColor;
  d: path("M22 9v6a3 3 0 0 1-3 3v1a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-1a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v1a3 3 0 0 1 3 3m-5-4a1 1 0 0 0-1-1H8a.997.997 0 0 0-1 1v1h10Zm-7 5a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm-3 8v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1Z");
}
</style><path class="ca-l0ibtt"/>`,
		"fallback": "coolicons:printer-fill",
	});
}

export default Component;
