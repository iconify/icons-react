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
		"content": `<style>.ksh9gwbey {
  fill: currentColor;
  d: path("M10 3H8v1.88l2 2zm6 6v3.88l1.8 1.8l.2-.2V9c0-1.1-.9-2-2-2V3h-2v4h-3.88l2 2zM4.12 3.84L2.71 5.25L6 8.54v5.96L9.5 18v3h5v-3l.48-.48l4.47 4.47l1.41-1.41zm8.38 13.33V19h-1v-1.83L8 13.65v-3.11l5.57 5.57z");
}
</style><path class="ksh9gwbey"/>`,
		"fallback": "ic:outline-power-off",
	});
}

export default Component;
