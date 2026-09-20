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
		"content": `<style>.af07tqbxy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 12.732h4.594v4.594H9.5zm23.487.92H38.5v2.757h-5.513zm0 8.985H38.5v2.757h-5.513zm0 8.985H38.5v2.757h-5.513zm-14.928-17.97h11.945v2.757H18.059zm0 8.985h11.945v2.757H18.059zm0 8.985h11.945v2.757H18.059zM9.5 21.718h4.594v4.594H9.5zm0 8.955h4.594v4.594H9.5z");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="j3s9ivbxi"/><path class="af07tqbxy"/>`,
		"fallback": "arcticons:minimalist-calendar-widget",
	});
}

export default Component;
