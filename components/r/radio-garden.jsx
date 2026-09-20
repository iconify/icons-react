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
		"content": `<style>.k_b5ccbng {
  cx: 24px;
  cy: 24.023px;
  r: 8.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rtreo5bsc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5C12.128 2.506 2.506 12.128 2.5 24c.006 11.872 9.628 21.495 21.5 21.5c11.872-.005 21.495-9.628 21.5-21.5C45.495 12.128 35.872 2.506 24 2.5m-4.46 4.1L22 9.29l-1.52 2.85l-5 2.92l-1.88 6.42l8.61 2.73L13 38.19a18 18 0 0 1-2.75-2.64L8.87 24l4.73-2.49l-6.73-2.95a18 18 0 0 1 12.66-12zM32 7.92a17.9 17.9 0 0 1 5.74 4.51l-8.74.32zm6.76 5.84c5.258 7.534 3.961 17.825-3 23.82l-.92-10.21l-6-1.7l-1.39-6.8z");
}
</style><path class="rtreo5bsc"/><circle class="k_b5ccbng"/>`,
		"fallback": "arcticons:radio-garden",
	});
}

export default Component;
