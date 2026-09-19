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
		"content": `<style>.w4z6_roih {
  fill: currentColor;
  d: path("M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2M20 6l-8 4.99L4 6zM4 8l8 5l8-5v10H4z");
}

.x6ar14zbh {
  fill: currentColor;
  d: path("m20 8l-8 5l-8-5v10h16zm0-2H4l8 4.99z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="x6ar14zbh"/><path class="w4z6_roih"/>`,
		"fallback": "ic:twotone-email",
	});
}

export default Component;
