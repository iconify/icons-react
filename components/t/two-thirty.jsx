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

.zybb7jbrh {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m2 33.445V58h-4V35.445a4 4 0 0 1-.944-.758l-3.029.813L25 31.666l3.201-.859A3.98 3.98 0 0 1 30 28.555V26h4v2.555c.251.146.484.313.697.509L47.975 25.5L49 29.336L35.905 32.85A4 4 0 0 1 34 35.445");
}
</style><path class="zybb7jbrh"/><circle class="rt_37l3dj"/>`,
		"fallback": "emojione-monotone:two-thirty",
	});
}

export default Component;
