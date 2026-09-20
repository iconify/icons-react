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
		"content": `<style>.t_kt0dpav {
  fill: currentColor;
  d: path("M6.173 18.904L3 15.769l.708-.688l1.965 1.877V5.904h1v11.054l1.985-1.877l.688.688zm6.193-.808v-1H21v1zm0-5.577v-1H21v1zm0-5.577v-1H21v1z");
}
</style><path class="t_kt0dpav"/>`,
		"fallback": "material-symbols-light:list-arrow-outline",
	});
}

export default Component;
