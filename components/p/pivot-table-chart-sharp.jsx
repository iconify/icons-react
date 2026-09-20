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
		"content": `<style>.a0_lr_bac {
  fill: currentColor;
  d: path("M10.385 7.616V4H20v3.616zM4 20v-9.615h3.616V20zM4 7.615V4h3.616v3.616zM12.5 21l-3.308-3.308l3.308-3.307l.708.707l-2.089 2.1h6.073v-6.084l-2.1 2.1l-.707-.708l3.307-3.308L21 12.5l-.708.708l-2.1-2.1v7.084H11.12l2.089 2.1z");
}
</style><path class="a0_lr_bac"/>`,
		"fallback": "material-symbols-light:pivot-table-chart-sharp",
	});
}

export default Component;
