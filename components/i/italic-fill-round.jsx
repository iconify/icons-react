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
		"content": `<style>.tjhp8_bzp {
  fill: currentColor;
  d: path("M10 20H8a1 1 0 0 1 0-2h1.246l3.428-12H12a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2h-1.246l-3.428 12H12a1 1 0 0 1 0 2Z");
}
</style><path class="tjhp8_bzp"/>`,
		"fallback": "coolicons:italic-fill-round",
	});
}

export default Component;
