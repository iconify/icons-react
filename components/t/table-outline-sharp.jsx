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
		"content": `<style>.z92hhokhb {
  fill: currentColor;
  d: path("M4 20V4h16v16zm7.5-5.596H5V19h6.5zm1 0V19H19v-4.596zm-1-1V8.769H5v4.635zm1 0H19V8.769h-6.5zM5 7.769h14V5H5z");
}
</style><path class="z92hhokhb"/>`,
		"fallback": "material-symbols-light:table-outline-sharp",
	});
}

export default Component;
