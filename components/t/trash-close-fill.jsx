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
		"content": `<style>.cqoe2d5mz {
  fill: currentColor;
  d: path("M17 5h3a1 1 0 0 1 0 2h-1v12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7H4a1 1 0 0 1 0-2h3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3m-3-1h-4a.997.997 0 0 0-1 1h6a.997.997 0 0 0-1-1m-2 8.586l-1.293-1.293a.999.999 0 1 0-1.414 1.414L10.586 14l-1.293 1.293a.999.999 0 1 0 1.414 1.414L12 15.414l1.293 1.293a.999.999 0 1 0 1.414-1.414L13.414 14l1.293-1.293a.999.999 0 1 0-1.414-1.414Z");
}
</style><path class="cqoe2d5mz"/>`,
		"fallback": "coolicons:trash-close-fill",
	});
}

export default Component;
