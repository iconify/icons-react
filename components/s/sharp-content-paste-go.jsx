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
		"content": `<style>.luprwpbby {
  fill: currentColor;
  d: path("m18.01 13l-1.42 1.41l1.58 1.58H12v2h6.17l-1.58 1.59l1.42 1.41l3.99-4z");
}

.ztrjkgb_r {
  fill: currentColor;
  d: path("M5 5h2v3h10V5h2v6h2V3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h7v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1");
}
</style><path class="ztrjkgb_r"/><path class="luprwpbby"/>`,
		"fallback": "ic:sharp-content-paste-go",
	});
}

export default Component;
