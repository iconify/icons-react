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
		"content": `<style>.gwy9oyc6t {
  cx: 26.719px;
  cy: 15.241px;
  r: 0.862px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.h5dvtkbmd {
  cx: 20.779px;
  cy: 15.241px;
  r: 0.862px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.jc1oydeao {
  width: 39px;
  height: 31px;
  x: 4.5px;
  y: 8.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.k89t5fbtg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.916 15.241h-4.592l3.803 16.851l9.768.02l3.78-16.872h-5.093m-3.571 16.863L24 39.5");
}
</style><rect class="jc1oydeao"/><circle class="h5dvtkbmd"/><circle class="gwy9oyc6t"/><path class="k89t5fbtg"/>`,
		"fallback": "arcticons:medics",
	});
}

export default Component;
