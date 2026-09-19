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
		"content": `<style>.ejtxjks0w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.18 9.2h6.09v6.09h-6.09zM20.96 20.95h6.09v6.09h-6.09zm11.22 11.97h6.09v6.09h-6.09zm0-20.67H12.77m0 23.71V12.25m19.41 23.71H12.77M24 20.95v-8.7m14.27 0h4.23m-7.27 17.18V18.57");
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
</style><rect class="j3s9ivbxi"/><path class="ejtxjks0w"/>`,
		"fallback": "arcticons:puzzles",
	});
}

export default Component;
