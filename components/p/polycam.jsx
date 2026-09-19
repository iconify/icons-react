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
		"content": `<style>.e3k41v9-m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.044 19.746l-7.425-5.628L11.127 24l-1.7-1.336v-9.619l1.7 1.307L23.619 4.5l13.836 10.297");
}

.izjgwjb4i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.648 29.155l6.983-4.99l-.176-9.368l-12.924 9.972");
}

.mzsha5gfc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.53 24.77l12.384 8.877l1.658-1.217v9.853L36.914 43.5L24.53 34.153z");
}
</style><path class="e3k41v9-m"/><path class="izjgwjb4i"/><path class="mzsha5gfc"/>`,
		"fallback": "arcticons:polycam",
	});
}

export default Component;
