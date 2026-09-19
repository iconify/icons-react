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
		"content": `<style>.zhh-k1b_k {
  fill: currentColor;
  d: path("M15 5h6v2h-6zM9 5H3v2h4.85l6.92 12H21v-2h-5.07z");
}
</style><path class="zhh-k1b_k"/>`,
		"fallback": "ic:outline-keyboard-option-key",
	});
}

export default Component;
