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
		"content": `<style>.hedj3bbrm {
  cx: 13px;
  cy: 9px;
  r: 1px;
  fill: currentColor;
}

.ve0q62nvj {
  fill: currentColor;
  d: path("M18 6V4h2V2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14v-2h-4.03A4.97 4.97 0 0 0 18 16v-5H8v5c0 1.64.81 3.09 2.03 4H6V4h2v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1m-8 10v-3h6v3c0 1.65-1.35 3-3 3s-3-1.35-3-3");
}
</style><path class="ve0q62nvj"/><circle class="hedj3bbrm"/>`,
		"fallback": "ic:outline-coffee-maker",
	});
}

export default Component;
