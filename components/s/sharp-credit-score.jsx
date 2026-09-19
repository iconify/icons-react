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
		"content": `<style>.uno3mobji {
  fill: currentColor;
  d: path("M2 4v16h7v-2H4v-6h18V4zm18 4H4V6h16zm-5.07 11.17l-2.83-2.83l-1.41 1.41L14.93 22L22 14.93l-1.41-1.41z");
}
</style><path class="uno3mobji"/>`,
		"fallback": "ic:sharp-credit-score",
	});
}

export default Component;
