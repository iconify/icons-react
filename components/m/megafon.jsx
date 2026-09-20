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
		"content": `<style>.f58dwdb2y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.43 45A21.5 21.5 0 1 0 24 2.5");
}

.wt8q39cma {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19 20.23a2.69 2.69 0 1 1 2.68-2.69A2.69 2.69 0 0 1 19 20.23M24 2.5A21.5 21.5 0 0 0 19.43 45V25.72A1.76 1.76 0 0 1 21.12 24h2.95V2.5m14.06 32.22A1.68 1.68 0 1 1 39.81 33a1.68 1.68 0 0 1-1.68 1.68m-5.61 0A1.68 1.68 0 1 1 34.19 33a1.68 1.68 0 0 1-1.67 1.68m-5.62 0A1.68 1.68 0 1 1 28.58 33a1.68 1.68 0 0 1-1.68 1.68");
}
</style><path class="wt8q39cma"/><path class="f58dwdb2y"/>`,
		"fallback": "arcticons:megafon",
	});
}

export default Component;
