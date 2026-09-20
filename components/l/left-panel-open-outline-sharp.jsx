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
		"content": `<style>.krvg9abxo {
  fill: currentColor;
  d: path("M12.404 8.827v6.346L15.596 12zM5 19h3V5H5zm4 0h10V5H9zm-1 0H5zm-4 1V4h16v16z");
}
</style><path class="krvg9abxo"/>`,
		"fallback": "material-symbols-light:left-panel-open-outline-sharp",
	});
}

export default Component;
