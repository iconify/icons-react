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
		"content": `<style>.h4_lzfb1u {
  fill: currentColor;
  d: path("M3 19V5h6.596l2 2H21v12zm4.825-3.337l4.239-4.238l-.714-.713l-3.525 3.53l-1.406-1.405l-.707.713zm6.575 0l1.6-1.6l1.6 1.6l.688-.688l-1.6-1.6l1.6-1.6l-.688-.688l-1.6 1.6l-1.6-1.6l-.688.688l1.6 1.6l-1.6 1.6z");
}
</style><path class="h4_lzfb1u"/>`,
		"fallback": "material-symbols-light:rule-folder-sharp",
	});
}

export default Component;
