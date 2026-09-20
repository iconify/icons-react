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
		"content": `<style>.r15zbbb0j {
  fill: currentColor;
  d: path("M4 20V4h16v16zM7.346 8.904h1.538V7.365H7.346zm3.885 0h1.538V7.365h-1.538zm3.885 0h1.538V7.365h-1.538zm-7.77 3.865h1.539v-1.538H7.346zm3.885 0h1.538v-1.538h-1.538zm3.885 0h1.538v-1.538h-1.538z");
}
</style><path class="r15zbbb0j"/>`,
		"fallback": "material-symbols-light:margin-sharp",
	});
}

export default Component;
