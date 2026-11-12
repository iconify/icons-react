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
		"content": `<style>.hyf7q8bkm {
  fill: currentColor;
  d: path("M6.01 19a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Zm4 0a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2Zm4 0a1 1 0 0 1 0 2H14a1 1 0 0 1 0-2Zm4 0a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2Z");
}
</style><path class="hyf7q8bkm"/>`,
		"fallback": "coolicons:signal-none-fill-sharp",
	});
}

export default Component;
