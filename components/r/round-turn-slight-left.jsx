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
		"content": `<style>.b04alpbef {
  fill: currentColor;
  d: path("M11.66 5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v3.66c0 .55.45 1 1 1s1-.45 1-1V7.41l5 5V19c0 .55.45 1 1 1s1-.45 1-1v-6.58c0-.53-.21-1.04-.59-1.41l-5-5h1.24A1.02 1.02 0 0 0 11.66 5");
}
</style><path class="b04alpbef"/>`,
		"fallback": "ic:round-turn-slight-left",
	});
}

export default Component;
