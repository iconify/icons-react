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
		"content": `<style>.ytezkibsj {
  width: 21.7px;
  height: 39px;
  x: 13.15px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.022px;
}
</style><rect class="ytezkibsj"/>`,
		"fallback": "arcticons:snapmod",
	});
}

export default Component;
