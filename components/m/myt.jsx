import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kqwtm_bnl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4 24.882c2.752-3.17 7.64-9.9 8.25-9.5c.727.743-1.98 6.837-2.455 9.25c2.21-1.547 8.439-10.676 9.705-10.25c1.388.426-3.446 10.326-2.75 10.5c4.963-1.947 7.31-4.73 8.5-4.25c-.207 1.347-1.022 3.282-.75 4c.854.3 5.664-3.963 7.5-4c.567 1.108-3 8.667-4.5 13m7-8.5l3.757-10.5H32.5H44");
}
</style><path class="kqwtm_bnl"/>`,
		"fallback": "arcticons:myt",
	});
}

export default Component;
