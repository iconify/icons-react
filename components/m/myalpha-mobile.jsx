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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.x-9u8abrj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.141 32.191L27.45 22.5h11.974a15.4 15.4 0 0 0-2.47-7H22.5V8.576a15.4 15.4 0 0 0-7 2.47V15.5h-4.454a15.4 15.4 0 0 0-2.47 7H15.5v14.454a15.4 15.4 0 0 0 7 2.47V27.45l9.692 9.691a15.55 15.55 0 0 0 4.95-4.95");
}
</style><circle class="cpk0fnbgt"/><path class="x-9u8abrj"/>`,
		"fallback": "arcticons:myalpha-mobile",
	});
}

export default Component;
