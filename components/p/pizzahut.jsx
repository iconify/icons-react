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
		"content": `<style>.n3nrthbmp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m43.5 29.95l-10.02-6.91l-1.77-4.99H16.29l-1.77 4.99L4.5 29.95z");
}
</style><path class="n3nrthbmp"/>`,
		"fallback": "arcticons:pizzahut",
	});
}

export default Component;
