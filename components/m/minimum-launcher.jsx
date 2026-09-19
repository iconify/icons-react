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
		"content": `<style>.j6swy051u {
  width: 16.586px;
  height: 16.586px;
  x: 25.914px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.oh-q7qtwz {
  width: 16.586px;
  height: 16.586px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.x099_zptd {
  width: 16.586px;
  height: 16.586px;
  x: 5.5px;
  y: 25.914px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.ypm87sb6b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.207 42.5V25.914m-8.293 8.293H42.5");
}
</style><rect class="oh-q7qtwz"/><rect class="j6swy051u"/><rect class="x099_zptd"/><path class="ypm87sb6b"/>`,
		"fallback": "arcticons:minimum-launcher",
	});
}

export default Component;
