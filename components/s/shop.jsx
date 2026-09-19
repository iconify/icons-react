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
		"content": `<style>.kl927m3fj {
  fill: currentColor;
  d: path("M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6zm-6-2h4v2h-4zM9 18V9l7.5 4z");
}
</style><path class="kl927m3fj"/>`,
		"fallback": "ic:shop",
	});
}

export default Component;
