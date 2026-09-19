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
		"content": `<style>.f1as288gx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.87 22.02c3.017 0 6.691-1.906 6.691-6.476c0-3.23-.888-5.72-6.075-7.15l-3.202 2.847v10.78z");
}

.zqv9djbkd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.208 23.93c11.544-.736 12.257-7.126 12.257-9.256c0-2.263-1.095-8.32-8.393-8.32H5.5l3.649 2.773v29.556L5.5 41.457l17.807.19l-3.65-2.774V27.737l3.081-2.548l6.99 16.457H42.5l-2.846-2.744l-6.568-12.552l-7.856-1.82z");
}
</style><path class="zqv9djbkd"/><path class="f1as288gx"/>`,
		"fallback": "arcticons:republik",
	});
}

export default Component;
