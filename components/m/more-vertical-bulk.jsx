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
		"content": `<style>.hm5a0s0xs {
  fill: currentColor;
  d: path("M10.158 5.221a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558m0 6a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558m0 6a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558");
}
</style><path class="hm5a0s0xs"/>`,
		"fallback": "coolicons:more-vertical-bulk",
	});
}

export default Component;
