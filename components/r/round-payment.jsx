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
		"content": `<style>.rr3gwkbde {
  fill: currentColor;
  d: path("M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m-1 14H5c-.55 0-1-.45-1-1v-5h16v5c0 .55-.45 1-1 1m1-10H4V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1z");
}
</style><path class="rr3gwkbde"/>`,
		"fallback": "ic:round-payment",
	});
}

export default Component;
