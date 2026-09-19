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
		"content": `<style>.bj-kj6bja {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.5 5.5h-21a8 8 0 0 0-8 8v21a8 8 0 0 0 8 8h21a8 8 0 0 0 8-8v-21a8 8 0 0 0-8-8");
}

.jwj2babvj {
  width: 15px;
  height: 15px;
  x: 16.5px;
  y: 16.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}
</style><path class="bj-kj6bja"/><rect class="jwj2babvj"/>`,
		"fallback": "arcticons:recon",
	});
}

export default Component;
