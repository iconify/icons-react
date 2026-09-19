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
		"content": `<style>.gn9g6qb_o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.944 11.202l-8.479 25.596l-8.478-25.596M28.31 29.02a3.856 3.856 0 0 1 4.616-3.778c1.615.31 2.905 1.708 3.066 3.345c.12 1.218-.266 2.42-1.107 3.158c-1.558 1.367-6.576 5.052-6.576 5.052h7.704");
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
</style><rect class="j3s9ivbxi"/><path class="gn9g6qb_o"/>`,
		"fallback": "arcticons:v2raytun",
	});
}

export default Component;
