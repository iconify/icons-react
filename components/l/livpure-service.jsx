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

.ne3vjvbpz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.59 18.518C16.107 10.27 22.014 5.225 30.2 3.4m1.762 12.404c7.977 8.547 6.441 21.42-2.462 28.996M24 32.7a20.5 20.5 0 0 1-21.4-6.8");
}

.xzsl8u9uv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 32.7c-3.6-2.4-9.5-7.3-9.5-13c0-3.2 2.5-5.5 5.3-5.5c2 0 3.5 1.1 4.2 3c.7-1.9 2.2-3 4.2-3c2.8 0 5.3 2.3 5.3 5.5c0 5.7-5.9 10.6-9.5 13");
}
</style><circle class="cpk0fnbgt"/><path class="xzsl8u9uv"/><path class="ne3vjvbpz"/>`,
		"fallback": "arcticons:livpure-service",
	});
}

export default Component;
