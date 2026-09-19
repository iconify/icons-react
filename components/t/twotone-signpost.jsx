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
		"content": `<style>.bwg8kcb8x {
  fill: currentColor;
  d: path("M6 6h11.17l1 1l-1 1H6zm12 10H6.83l-1-1l1-1H18z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.qjsr08bhq {
  fill: currentColor;
  d: path("M13 10h5l3-3l-3-3h-5V2h-2v2H4v6h7v2H6l-3 3l3 3h5v4h2v-4h7v-6h-7zM6 6h11.17l1 1l-1 1H6zm12 10H6.83l-1-1l1-1H18z");
}
</style><path class="bwg8kcb8x"/><path class="qjsr08bhq"/>`,
		"fallback": "ic:twotone-signpost",
	});
}

export default Component;
