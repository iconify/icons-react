import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tpaq8o-fb {
  fill: currentColor;
  d: path("M17 3a1 1 0 1 0-2 0v26a1 1 0 1 0 2 0zm1.5 6h7a1.5 1.5 0 0 1 0 3h-7v2h7a3.5 3.5 0 1 0 0-7h-7zm7 11h-7v-2h7a3.5 3.5 0 1 1 0 7h-7v-2h7a1.5 1.5 0 0 0 0-3M3 5a1 1 0 0 0 0 2h10.5V5zM2 26a1 1 0 0 1 1-1h10.5v2H3a1 1 0 0 1-1-1m1-6a1 1 0 1 0 0 2h10.5v-2zm-1-4a1 1 0 0 1 1-1h10.5v2H3a1 1 0 0 1-1-1m1-6a1 1 0 1 0 0 2h10.5v-2z");
}
</style><path class="tpaq8o-fb"/>`,
		"fallback": "fluent:text-density-32-regular",
	});
}

export default Component;
