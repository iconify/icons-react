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

.mnm6o6b7s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.92 33.94a6.86 6.86 0 0 0 3.65.86h3.2a5.41 5.41 0 0 0 5.39-5.4a5.4 5.4 0 0 0-5.39-5.4h-3.54a5.4 5.4 0 0 1-5.39-5.4a5.4 5.4 0 0 1 5.39-5.4h3.2a7.36 7.36 0 0 1 3.23.63M24 13.2v-2.7m0 27v-2.7M8.8 39.2L39.2 8.8");
}
</style><circle class="cpk0fnbgt"/><path class="mnm6o6b7s"/>`,
		"fallback": "arcticons:moneybuster",
	});
}

export default Component;
