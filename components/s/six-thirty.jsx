import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.emtuqybuy {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m2 33.445V58h-4V47.518L29.334 50L25.5 48.973l3.772-14.061A3.98 3.98 0 0 1 28 32c0-1.478.81-2.753 2-3.446V26h4v.624l1.5.4l-.6 2.234A3.97 3.97 0 0 1 36 32c0 1.477-.81 2.753-2 3.445");
}

.rt_37l3dj {
  cx: 32px;
  cy: 32px;
  r: 3px;
  fill: currentColor;
}
</style><path class="emtuqybuy"/><circle class="rt_37l3dj"/>`,
		"fallback": "emojione-monotone:six-thirty",
	});
}

export default Component;
