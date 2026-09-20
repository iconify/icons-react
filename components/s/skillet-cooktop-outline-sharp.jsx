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
		"content": `<style>.cissbibjv {
  fill: currentColor;
  d: path("M4 14.346V9h12V7.371l5.848-1.975l.318.939L17 8.07v6.275zm1-1h11V10H5zM10 20v-2.884H3v-1h8V20zm3 0v-3.884h8v1h-7V20zm-2.5-8.327");
}
</style><path class="cissbibjv"/>`,
		"fallback": "material-symbols-light:skillet-cooktop-outline-sharp",
	});
}

export default Component;
