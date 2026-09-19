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
		"content": `<style>.x7geb1b7w {
  fill: currentColor;
  d: path("M4 11v2h8v-2zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3z");
}
</style><path class="x7geb1b7w"/>`,
		"fallback": "ic:sharp-exposure-neg-1",
	});
}

export default Component;
