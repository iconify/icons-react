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
		"content": `<style>.zvc7qsb3b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 11.165h39v10.237h-39zm0 15.433h39v10.237h-39z");
}
</style><path class="zvc7qsb3b"/>`,
		"fallback": "arcticons:mada-pay",
	});
}

export default Component;
