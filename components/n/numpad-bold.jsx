import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m8pnaeb1p {
  fill: currentColor;
  d: path("M84 48a20 20 0 1 1-20-20a20 20 0 0 1 20 20m44-20a20 20 0 1 0 20 20a20 20 0 0 0-20-20m64 40a20 20 0 1 0-20-20a20 20 0 0 0 20 20M64 84a20 20 0 1 0 20 20a20 20 0 0 0-20-20m64 0a20 20 0 1 0 20 20a20 20 0 0 0-20-20m64 0a20 20 0 1 0 20 20a20 20 0 0 0-20-20M64 140a20 20 0 1 0 20 20a20 20 0 0 0-20-20m64 0a20 20 0 1 0 20 20a20 20 0 0 0-20-20m0 56a20 20 0 1 0 20 20a20 20 0 0 0-20-20m64-56a20 20 0 1 0 20 20a20 20 0 0 0-20-20");
}
</style><path class="m8pnaeb1p"/>`,
		"fallback": "ph:numpad-bold",
	});
}

export default Component;
