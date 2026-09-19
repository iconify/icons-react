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
		"content": `<style>.bx_d9ksso {
  fill: currentColor;
  d: path("M23 8h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 9h-4v-7h4zM4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4z");
}

.ks6zp8urd {
  fill: currentColor;
  d: path("M18 10h4v7h-4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="ks6zp8urd"/><path class="bx_d9ksso"/>`,
		"fallback": "ic:twotone-devices",
	});
}

export default Component;
