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
		"content": `<style>.p84kmlbje {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m17.998 32H35.445A4 4 0 0 1 34 35.445V38h-4v-2.555A4 4 0 0 1 28.555 34h-2.553L26 30h2.555c.35-.6.845-1.096 1.445-1.445V6h4v22.555A4 4 0 0 1 35.445 30H50z");
}

.rt_37l3dj {
  cx: 32px;
  cy: 32px;
  r: 3px;
  fill: currentColor;
}
</style><path class="p84kmlbje"/><circle class="rt_37l3dj"/>`,
		"fallback": "emojione-monotone:three-oclock",
	});
}

export default Component;
