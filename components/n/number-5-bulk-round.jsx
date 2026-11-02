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
		"content": `<style>.d2jy7ccqw {
  fill: currentColor;
  d: path("M9 5v5h3a6 6 0 1 1-6 6a1 1 0 0 1 2 0a4 4 0 1 0 4-4H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2Z");
}
</style><path class="d2jy7ccqw"/>`,
		"fallback": "coolicons:number-5-bulk-round",
	});
}

export default Component;
