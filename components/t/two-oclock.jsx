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
		"content": `<style>.ibyb2w7_y {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m2 33.445V38h-4v-2.278L27.934 37L26 33.418l2.017-1.248c-.002-.058-.017-.111-.017-.17c0-1.477.81-2.752 2-3.445V6h4v22.469L46.07 21L48 24.586l-12.001 7.425A3.98 3.98 0 0 1 34 35.445");
}

.rt_37l3dj {
  cx: 32px;
  cy: 32px;
  r: 3px;
  fill: currentColor;
}
</style><path class="ibyb2w7_y"/><circle class="rt_37l3dj"/>`,
		"fallback": "emojione-monotone:two-oclock",
	});
}

export default Component;
