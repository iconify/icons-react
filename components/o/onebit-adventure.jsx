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
		"content": `<style>.cf7peptsk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 28.333h4.333V37H4.5z");
}

.uods3wbsk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.167 11H8.833v4.333H4.5V24h17.333v4.333h-8.666V37H30.5V15.333h-4.333zm13 4.333V11H30.5v4.333h4.333v4.334h4.334V24H43.5v-8.667z");
}
</style><path class="cf7peptsk"/><path class="uods3wbsk"/>`,
		"fallback": "arcticons:onebit-adventure",
	});
}

export default Component;
