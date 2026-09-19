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
		"content": `<style>.d883_6bfd {
  fill: currentColor;
  d: path("M16.49 13.75L14 16.25l2.49 2.5V17H22v-1.5h-5.51zm3.02 6H14v1.5h5.51V23L22 20.5L19.51 18zM7.5 3.5c0 1.1.9 2 2 2s2-.9 2-2s-.9-2-2-2s-2 .9-2 2m2.05 6.9C10.85 12 12.8 13 15 13v-2c-1.85 0-3.45-1-4.35-2.45l-.95-1.6C9.35 6.35 8.7 6 8 6q-.375 0-.75.15L2 8.3V13h2V9.65l1.75-.75L3 23h2.1l1.75-8L9 17v6h2v-7.55L8.95 13.4z");
}
</style><path class="d883_6bfd"/>`,
		"fallback": "ic:twotone-transfer-within-a-station",
	});
}

export default Component;
