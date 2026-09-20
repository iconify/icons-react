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
		"content": `<style>.q18v9vb-x {
  fill: currentColor;
  d: path("M4 17.5H3v-11h1zm7.673-.212L6.385 12l5.288-5.288l.688.688l-4.055 4.1H21v1H8.287l4.1 4.1z");
}
</style><path class="q18v9vb-x"/>`,
		"fallback": "material-symbols-light:keyboard-tab-rtl",
	});
}

export default Component;
