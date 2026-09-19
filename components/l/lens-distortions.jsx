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

.dtisz3bgb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.383 11.539v3.555L17.616 23.82v3.555m12.767-6.75v3.555l-12.767 8.726v3.555");
}
</style><circle class="cpk0fnbgt"/><path class="dtisz3bgb"/>`,
		"fallback": "arcticons:lens-distortions",
	});
}

export default Component;
