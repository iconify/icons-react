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
		"content": `<style>.a44t5ma1y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 30.493h39v-3.118h-6.25v-9.868H11.23v9.868H4.5z");
}
</style><path class="a44t5ma1y"/>`,
		"fallback": "arcticons:keysh",
	});
}

export default Component;
