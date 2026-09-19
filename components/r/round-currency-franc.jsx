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
		"content": `<style>.rbtb94crq {
  fill: currentColor;
  d: path("M18 4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v12H6c-.55 0-1 .45-1 1s.45 1 1 1h1v2c0 .55.45 1 1 1s1-.45 1-1v-2h3c.55 0 1-.45 1-1s-.45-1-1-1H9v-3h7c.55 0 1-.45 1-1s-.45-1-1-1H9V5h8c.55 0 1-.45 1-1");
}
</style><path class="rbtb94crq"/>`,
		"fallback": "ic:round-currency-franc",
	});
}

export default Component;
