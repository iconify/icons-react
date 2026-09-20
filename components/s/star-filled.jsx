import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v1wg31bhk {
  fill: currentColor;
  d: path("m10 15.97l-4.295 1.915a1 1 0 0 1-1.402-1.018l.494-4.677L1.65 8.698a1 1 0 0 1 .535-1.647l4.6-.976L9.134 2a1 1 0 0 1 1.732 0l2.35 4.074l4.6.976a1 1 0 0 1 .535 1.647l-3.148 3.494l.494 4.676a1 1 0 0 1-1.402 1.018z");
}
</style><path class="v1wg31bhk"/>`,
		"fallback": "pepicons-pop:star-filled",
	});
}

export default Component;
