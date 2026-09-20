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
		"content": `<style>.kfc_4wb1t {
  fill: currentColor;
  d: path("M1 18.77v-1h3.616V17H3V5h18v12h-1.616v.77H23v1zM4 16h16V6H4zm0 0V6z");
}
</style><path class="kfc_4wb1t"/>`,
		"fallback": "material-symbols-light:laptop-windows-outline-sharp",
	});
}

export default Component;
