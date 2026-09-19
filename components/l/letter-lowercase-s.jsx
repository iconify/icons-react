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
		"content": `<style>.dcip7-zny {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.71 28.406c.73.613 1.52.894 3.29.894h.897a2.647 2.647 0 0 0 2.645-2.65h0A2.647 2.647 0 0 0 24.897 24h-1.794a2.647 2.647 0 0 1-2.645-2.65h0a2.647 2.647 0 0 1 2.645-2.65H24c1.77 0 2.56.281 3.29.894");
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
</style><rect class="j3s9ivbxi"/><path class="dcip7-zny"/>`,
		"fallback": "arcticons:letter-lowercase-s",
	});
}

export default Component;
