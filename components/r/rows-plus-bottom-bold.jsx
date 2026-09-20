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
		"content": `<style>.zsrz0qkrh {
  fill: currentColor;
  d: path("M208 112H48a20 20 0 0 0-20 20v24a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-24a20 20 0 0 0-20-20m-4 40H52v-16h152Zm4-116H48a20 20 0 0 0-20 20v24a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 40H52V60h152Zm-44 144a12 12 0 0 1-12 12h-8v8a12 12 0 0 1-24 0v-8h-8a12 12 0 0 1 0-24h8v-8a12 12 0 0 1 24 0v8h8a12 12 0 0 1 12 12");
}
</style><path class="zsrz0qkrh"/>`,
		"fallback": "ph:rows-plus-bottom-bold",
	});
}

export default Component;
