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
		"content": `<style>.u4td4klof {
  fill: currentColor;
  d: path("M28 20h10v15.75A6.25 6.25 0 0 1 31.75 42h-19.5A6.25 6.25 0 0 1 6 35.75v-19.5A6.25 6.25 0 0 1 12.25 10H28zM8.5 35.75a3.75 3.75 0 0 0 3.75 3.75H16V32H8.5zm10 3.75h7V32h-7zm9.5 0h3.75a3.75 3.75 0 0 0 3.75-3.75V32H28zm-19.5-10H16v-7H8.5zm10 0h7v-7h-7zm9.5 0h7.5v-7H28zm-15.75-17a3.75 3.75 0 0 0-3.75 3.75V20H16v-7.5zM18.5 20h7v-7.5h-7zM36.762 3.513a1.75 1.75 0 0 1 2.475 0l5.25 5.248a1.75 1.75 0 0 1 0 2.474l-5.25 5.248a1.75 1.75 0 0 1-2.475 0l-5.25-5.248a1.75 1.75 0 0 1 0-2.474zM33.81 9.998L38 14.186l4.188-4.188L38 5.811z");
}
</style><path class="u4td4klof"/>`,
		"fallback": "fluent:puzzle-cube-piece-48-regular",
	});
}

export default Component;
