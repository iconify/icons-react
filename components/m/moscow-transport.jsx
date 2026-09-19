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
		"content": `<style>.egplo3b0p {
  cx: 24px;
  cy: 20.826px;
  r: 5.109px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.j-gf15bqr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.163 31.663a15.326 15.326 0 1 1 21.674 0L24 42.5");
}

.mqdeegc9y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.775 28.051a10.217 10.217 0 1 1 14.45 0L20.388 38.888");
}
</style><path class="j-gf15bqr"/><circle class="egplo3b0p"/><path class="mqdeegc9y"/>`,
		"fallback": "arcticons:moscow-transport",
	});
}

export default Component;
