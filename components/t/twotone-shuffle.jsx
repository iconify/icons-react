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
		"content": `<style>.xioqedbjl {
  fill: currentColor;
  d: path("M20 4h-5.5l2.04 2.04L4 18.59L5.41 20L17.96 7.46L20 9.5zM5.41 4L4 5.41l5.17 5.17l1.42-1.41zM20 20v-5.5l-2.04 2.04l-3.13-3.13l-1.41 1.41l3.13 3.13L14.5 20z");
}
</style><path class="xioqedbjl"/>`,
		"fallback": "ic:twotone-shuffle",
	});
}

export default Component;
