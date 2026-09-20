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

.s1t5y56vv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.51 18.28h5.72m0 0v8.58a2.87 2.87 0 0 1-2.86 2.86a2.86 2.86 0 0 1-2.86-2.86v-.95m16.61-3.78a3.83 3.83 0 0 0-4-3.83a4 4 0 0 0-3.64 4.05v3.56a3.84 3.84 0 0 0 3.84 3.84a3.84 3.84 0 0 0 3.84-3.84h-3.88m10.53-7.61v7.61a3.84 3.84 0 0 0 3.84 3.84a3.84 3.84 0 0 0 3.84-3.84V18.3M28.4 36.36V11.64");
}
</style><path class="s1t5y56vv"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:unimainz",
	});
}

export default Component;
