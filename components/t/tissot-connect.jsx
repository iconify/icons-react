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
		"content": `<style>.bw8kgfp8m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.565 14.475h16.87M24 28.065v-13.59m-4.465 23.56h2.666m-1.333 2.666v-2.666M24 36.236h6.264V42.5H24zm-6.264 0H24V42.5h-6.264zm9.396 4.465v-2.666m-1.333 1.333h2.666");
}

.eh31xttof {
  cx: 24px;
  cy: 19.88px;
  r: 14.38px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="eh31xttof"/><path class="bw8kgfp8m"/>`,
		"fallback": "arcticons:tissot-connect",
	});
}

export default Component;
