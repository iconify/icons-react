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
		"content": `<style>.w_arm0b1o {
  fill: currentColor;
  d: path("M3 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm9.01 12H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="w_arm0b1o"/>`,
		"fallback": "coolicons:tablet-button-fill",
	});
}

export default Component;
