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
		"content": `<style>.mn-oihkai {
  fill: var(--svg-color--e45c5c, #e45c5c);
  d: path("M8.182 16.636H4.909V3h3.818l3 8.727L15.273 3h3.818v18h-3.273V9l-3 7.636h-2.182L8.182 9z");
}
</style><path class="mn-oihkai"/>`,
		"fallback": "token-branded:meed",
	});
}

export default Component;
