import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d_6enni3r {
  fill: currentColor;
  d: path("M208 84h-36V56a44 44 0 0 0-88 0v28H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12M44 124h168v24H44Zm0 32h168v24H44ZM92 56a36 36 0 0 1 72 0v28H92ZM48 92h160a4 4 0 0 1 4 4v20H44V96a4 4 0 0 1 4-4m160 120H48a4 4 0 0 1-4-4v-20h168v20a4 4 0 0 1-4 4");
}
</style><path class="d_6enni3r"/>`,
		"fallback": "ph:lock-laminated-thin",
	});
}

export default Component;
