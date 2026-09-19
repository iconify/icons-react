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
		"content": `<style>.bokdrebtl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.797 34.797L42.5 42.5");
}

.deib5z90z {
  cx: 25.284px;
  cy: 25.284px;
  r: 13.444px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ojer8xq3s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.032 25.284A2.53 2.53 0 0 1 5.5 22.75V8.032A2.53 2.53 0 0 1 8.032 5.5h14.72a2.53 2.53 0 0 1 2.532 2.532m4.264 9.33v7.122a5.065 5.065 0 0 1-5.064 5.064h-7.122");
}
</style><path class="ojer8xq3s"/><circle class="deib5z90z"/><path class="bokdrebtl"/>`,
		"fallback": "arcticons:magnifier-1",
	});
}

export default Component;
