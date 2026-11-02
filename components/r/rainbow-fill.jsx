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
		"content": `<style>.qnoh4vdeu {
  fill: currentColor;
  d: path("M2 18v-3C2 9.477 6.477 5 12 5s10 4.477 10 10v3a1 1 0 0 1-2 0v-3a8 8 0 0 0-16 0v3a1 1 0 0 1-2 0m3 0v-3a7 7 0 1 1 14 0v3a1 1 0 0 1-2 0v-3a5 5 0 0 0-10 0v3a1 1 0 0 1-2 0m3 0v-3a4 4 0 0 1 8 0v3a1 1 0 0 1-2 0v-3a2 2 0 1 0-4 0v3a1 1 0 0 1-2 0");
}
</style><path class="qnoh4vdeu"/>`,
		"fallback": "coolicons:rainbow-fill",
	});
}

export default Component;
