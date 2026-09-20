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
		"content": `<style>.bn5bzcc8l {
  fill: currentColor;
  d: path("M4 20q-.825 0-1.412-.587T2 18v-7h2v7h16V6h-9V4h9q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm13.075-3.5l1.425-1.425L15.4 12H18v-2h-6v6h2v-2.575zM2 9V4h7v5zm10 3");
}
</style><path class="bn5bzcc8l"/>`,
		"fallback": "material-symbols:pip-exit-outline",
	});
}

export default Component;
