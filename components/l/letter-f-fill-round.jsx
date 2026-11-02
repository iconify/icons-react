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
		"content": `<style>.sa6pubb4r {
  fill: currentColor;
  d: path("M8 5v6h7a1 1 0 0 1 0 2H8v7a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2Z");
}
</style><path class="sa6pubb4r"/>`,
		"fallback": "coolicons:letter-f-fill-round",
	});
}

export default Component;
