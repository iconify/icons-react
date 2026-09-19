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
		"content": `<style>.brbvblb1e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 27.625h13a3.222 3.222 0 1 1 0 6.444m-13-13.694h13a3.222 3.222 0 1 0 0-6.444m26 13.694h-13a3.222 3.222 0 1 0 0 6.444m13-13.694h-13a3.222 3.222 0 1 1 0-6.444m-18 6.444v7.25m23-7.25v7.25");
}

.mejnhzb5l {
  width: 39px;
  height: 29px;
  x: 4.5px;
  y: 9.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="mejnhzb5l"/><path class="brbvblb1e"/>`,
		"fallback": "arcticons:vsim-2",
	});
}

export default Component;
