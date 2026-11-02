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
		"content": `<style>.o_ahxnbky {
  fill: currentColor;
  d: path("M5 13a.997.997 0 0 0 1 1h12a1 1 0 0 0 1-1V9a1 1 0 0 1 2 0v4a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9a1 1 0 0 1 2 0Z");
}
</style><path class="o_ahxnbky"/>`,
		"fallback": "coolicons:space-bulk",
	});
}

export default Component;
