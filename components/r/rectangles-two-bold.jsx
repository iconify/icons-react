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
		"content": `<style>.zvvg0wb4x {
  d: path("M208 132H48a20.023 20.023 0 0 0-20 20v48a20.023 20.023 0 0 0 20 20h160a20.023 20.023 0 0 0 20-20v-48a20.023 20.023 0 0 0-20-20zm-4 64H52v-40h152zm4-160H48a20.023 20.023 0 0 0-20 20v48a20.023 20.023 0 0 0 20 20h160a20.023 20.023 0 0 0 20-20V56a20.023 20.023 0 0 0-20-20zm-4 64H52V60h152z");
  fill: currentColor;
}
</style><path class="zvvg0wb4x"/>`,
		"fallback": "ph:rectangles-two-bold",
	});
}

export default Component;
