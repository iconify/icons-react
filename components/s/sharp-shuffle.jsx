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
		"content": `<style>.es02i233b {
  fill: currentColor;
  d: path("M10.59 9.17L5.41 4L4 5.41l5.17 5.17zM14.5 4l2.04 2.04L4 18.59L5.41 20L17.96 7.46L20 9.5V4zm.33 9.41l-1.41 1.41l3.13 3.13L14.5 20H20v-5.5l-2.04 2.04z");
}
</style><path class="es02i233b"/>`,
		"fallback": "ic:sharp-shuffle",
	});
}

export default Component;
