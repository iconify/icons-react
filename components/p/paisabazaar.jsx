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
		"content": `<style>.j3s9ivbxi {
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

.p2gcisbit {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.218 22.481c0-2.58 2.07-4.673 4.622-4.673h0c2.553 0 4.622 2.092 4.622 4.673v3.038c0 2.58-2.07 4.673-4.622 4.673h0c-2.553 0-4.622-2.093-4.622-4.673m0 4.673V11.5m-11.68 14.019c0 2.58 2.07 4.673 4.622 4.673h0c2.553 0 4.622-2.092 4.622-4.673V22.48c0-2.58-2.07-4.673-4.622-4.673h0c-2.552 0-4.622 2.093-4.622 4.673m0-4.672V36.5");
}
</style><rect class="j3s9ivbxi"/><path class="p2gcisbit"/>`,
		"fallback": "arcticons:paisabazaar",
	});
}

export default Component;
