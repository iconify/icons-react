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
		"content": `<style>.hflxfiftp {
  fill: currentColor;
  d: path("M5 19h14V5H5zm2.41-7.4l2.58 2.58l6.59-6.59L17.99 9l-8 8L6 13.01z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.jnpp5-1xm {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM17.99 9l-1.41-1.42l-6.59 6.59l-2.58-2.57l-1.42 1.41l4 3.99z");
}
</style><path class="hflxfiftp"/><path class="jnpp5-1xm"/>`,
		"fallback": "ic:twotone-check-box",
	});
}

export default Component;
