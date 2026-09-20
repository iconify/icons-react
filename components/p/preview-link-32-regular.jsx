import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.l2rl_ebgf {
  fill: currentColor;
  d: path("M25.5 4A4.5 4.5 0 0 1 30 8.5v15a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 23.5v-15A4.5 4.5 0 0 1 6.5 4zm-19 2A2.5 2.5 0 0 0 4 8.5v15A2.5 2.5 0 0 0 6.5 26h19a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 25.5 6zM14 22a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2zm10.5-4a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5zM19 22h5v-2h-5zm-5-4a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2zM24.5 8A1.5 1.5 0 0 1 26 9.5v5a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 6 14.5v-5A1.5 1.5 0 0 1 7.5 8zM8 14h16v-4H8z");
}
</style><path class="l2rl_ebgf"/>`,
		"fallback": "fluent:preview-link-32-regular",
	});
}

export default Component;
