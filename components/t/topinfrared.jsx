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
		"content": `<style>.p_zbhkb7v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 15.268l8.65-8.91h14.319v35.283h-9.034V15.268zm22.969-.513H42.5V6.359H28.469");
}
</style><path class="p_zbhkb7v"/>`,
		"fallback": "arcticons:topinfrared",
	});
}

export default Component;
