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
		"content": `<style>.aaqg3fnso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.937 5.5H23.62c9.081 0 16.444 7.31 16.444 16.326c0 8.62-6.75 15.754-15.414 16.294M15.95 5.5v32.652M24.649 5.5v32.652");
}

.typ3uf2mi {
  cx: 20.299px;
  cy: 38.151px;
  r: 4.349px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="aaqg3fnso"/><circle class="typ3uf2mi"/>`,
		"fallback": "arcticons:tuesday-js",
	});
}

export default Component;
