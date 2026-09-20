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
		"content": `<style>.w_dgpuhxm {
  fill: currentColor;
  d: path("M20 14.212V6.846H6.77V3H21v11.212zM3 21V9.23h14.616V21z");
}
</style><path class="w_dgpuhxm"/>`,
		"fallback": "material-symbols-light:select-window-2-sharp",
	});
}

export default Component;
