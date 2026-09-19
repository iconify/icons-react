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
		"content": `<style>.bfn47vb_v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.5 24c.084 3.339 4.948 7.277 13.764 9.813c7.346 2.113 9.47 4.294 9.47 7.832c0 1.513-.295 2.688-2.183 3.85m16.117-6.775c.378-.538.604-1.264.604-2.067c0-2.92-2.39-8.28-16.272-12.653S7.728 14.267 7.728 11.347c0-.803.226-1.529.604-2.067M45.5 24c-.084-3.339-4.948-7.277-13.764-9.813c-7.346-2.112-9.47-4.294-9.47-7.831c0-1.514.295-2.69 2.183-3.851");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><path class="bfn47vb_v"/>`,
		"fallback": "arcticons:spond",
	});
}

export default Component;
