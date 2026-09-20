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
		"content": `<style>.c6kztyquz {
  fill: currentColor;
  d: path("M11 11V9h3V7H9v10h6v-6zm0 2h2v2h-2zm-8 8V3h18v18z");
}
</style><path class="c6kztyquz"/>`,
		"fallback": "material-symbols:looks-6-sharp",
	});
}

export default Component;
