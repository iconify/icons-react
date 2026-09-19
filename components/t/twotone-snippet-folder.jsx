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
		"content": `<style>.cqlhzm2ve {
  fill: currentColor;
  d: path("M9.17 6H4v12h16V8h-8.83z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.xopogkwmn {
  fill: currentColor;
  d: path("M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V6h5.17l2 2H20zm-2.5-5.88v3.38h-3v-5h1.38zM16.5 9H13v8h6v-5.5z");
}
</style><path class="cqlhzm2ve"/><path class="xopogkwmn"/>`,
		"fallback": "ic:twotone-snippet-folder",
	});
}

export default Component;
