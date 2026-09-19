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
		"content": `<style>.o06oxzfns {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.777 22.096v21.619");
}

.ts6lobciv {
  width: 20.429px;
  height: 27.596px;
  x: 13.777px;
  y: 4.715px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 10.214px;
  ry: 10.214px;
}
</style><rect class="ts6lobciv"/><path class="o06oxzfns"/>`,
		"fallback": "arcticons:papara",
	});
}

export default Component;
