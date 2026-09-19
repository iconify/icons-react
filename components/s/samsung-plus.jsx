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
		"content": `<style>.islrubbjo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.99 27.123c.49.639 1.105.877 1.96.877h1.185a1.996 1.996 0 0 0 1.996-1.996v-.009A1.996 1.996 0 0 0 21.135 24H19.83a2 2 0 0 1-1.998-1.997h0c0-1.106.896-2.002 2.002-2.002h1.178c.856 0 1.47.237 1.961.876m3.19 3.122h4m-2-2v4");
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
</style><path class="islrubbjo"/><rect class="jc1oydeao"/>`,
		"fallback": "arcticons:samsung-plus",
	});
}

export default Component;
