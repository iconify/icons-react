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
		"content": `<style>.iy4tk9w6q {
  fill: var(--svg-color--00eb88, #00eb88);
  d: path("M7.2 3H3.6v3.6h3.6zm0 7.2H3.6v3.6h3.6zm-3.6 7.2h3.6V21H3.6zm10.201-3.6h-3.6v3.601h3.6zm-3.6-7.2h3.6v3.6h-3.6zm10.2 3.6h-3.6v3.6h3.6z");
}
</style><path class="iy4tk9w6q"/>`,
		"fallback": "token-branded:lpt",
	});
}

export default Component;
