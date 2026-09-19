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

.dwc4pjbpi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.06 16.68v11.09m0-2.4l4.98-4.97m-3.66 3.66l3.66 3.66M23 24.94a2.84 2.84 0 0 1-2.84 2.83h0a2.83 2.83 0 0 1-2.83-2.83V20.4M23 27.77V20.4m4.15 0a1.84 1.84 0 0 0-1.84 1.84h0a1.84 1.84 0 0 0 1.84 1.84h.63m0 0h.62a1.84 1.84 0 0 1 1.84 1.85h0a1.84 1.84 0 0 1-1.84 1.84M30.07 21a3.13 3.13 0 0 0-2.29-.62h-.63m-1.66 6.77a3.1 3.1 0 0 0 2.29.62h.62m9.54-2.4a2.78 2.78 0 0 1-2.75 2.4h0A2.77 2.77 0 0 1 32.42 25v-1.83a2.77 2.77 0 0 1 2.77-2.77h0a2.76 2.76 0 0 1 2.74 2.39");
}
</style><circle class="cpk0fnbgt"/><path class="dwc4pjbpi"/>`,
		"fallback": "arcticons:kusc",
	});
}

export default Component;
