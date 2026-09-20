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
		"content": `<style>.kib19kboj {
  fill: currentColor;
  d: path("M4 20v-7h1v5.312L18.312 5H13V4h7v7h-1V5.689L5.689 19H11v1z");
}
</style><path class="kib19kboj"/>`,
		"fallback": "material-symbols-light:open-in-full-outline",
	});
}

export default Component;
