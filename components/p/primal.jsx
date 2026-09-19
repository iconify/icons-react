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

.ffye57qrg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.575 17.943c6.903-6.888 18.466-7.616 21.998-.943c-4.732-11.234-20.433-13.196-29.67-.651");
}

.p0wznzb6v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.5 24c0 6.877-5.574 12.45-12.45 12.45s-12.452-3.324-12.452-10.2c0-5.512 4.417-8.203 9.42-8.484c-12.56-3.869-16.57 4.362-16.57 11.832S20.093 43 27.856 45.154");
}

.uy_j9vuwe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.448 29.598c0-12.112 5.637-14.608 10.519-15.16c-8.406-1.102-19.705 3.015-16.191 23.667");
}
</style><circle class="cpk0fnbgt"/><path class="p0wznzb6v"/><path class="uy_j9vuwe"/><path class="ffye57qrg"/>`,
		"fallback": "arcticons:primal",
	});
}

export default Component;
