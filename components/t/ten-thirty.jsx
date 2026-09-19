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
		"content": `<style>.rt_37l3dj {
  cx: 32px;
  cy: 32px;
  r: 3px;
  fill: currentColor;
}

.venkt-nzq {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m3.143 36L34 36.857V58h-4V35.445c-1.19-.693-2-1.969-2-3.445c0-.348.059-.68.142-1.001L18 20.857L20.857 18L30 27.143V26h4v2.554c1.19.692 2 1.968 2 3.446c0 .348-.058.68-.142 1.001L38 35.143z");
}
</style><path class="venkt-nzq"/><circle class="rt_37l3dj"/>`,
		"fallback": "emojione-monotone:ten-thirty",
	});
}

export default Component;
