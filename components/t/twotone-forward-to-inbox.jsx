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
		"content": `<style>.skb7dmcsb {
  fill: currentColor;
  d: path("M13 18H4V8l8 5l8-5v5h-2c-2.76 0-5 2.24-5 5m-1-7L4 6h16z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.xhf6nqb8b {
  fill: currentColor;
  d: path("M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9v-2H4V8l8 5l8-5v5h2V6c0-1.1-.9-2-2-2m-8 7L4 6h16zm7 4l4 4l-4 4v-3h-4v-2h4z");
}
</style><path class="skb7dmcsb"/><path class="xhf6nqb8b"/>`,
		"fallback": "ic:twotone-forward-to-inbox",
	});
}

export default Component;
