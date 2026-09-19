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
		"content": `<style>.r3ezx-bcw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.473 26.897h23.054M18.23 21.103h11.54");
}

.ydvga8btl {
  width: 39px;
  height: 27.56px;
  x: 4.5px;
  y: 10.22px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.5px;
  ry: 3.5px;
}
</style><rect class="ydvga8btl"/><path class="r3ezx-bcw"/>`,
		"fallback": "arcticons:tesco-clubcard",
	});
}

export default Component;
