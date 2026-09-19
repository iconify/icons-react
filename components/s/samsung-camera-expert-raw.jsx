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
		"content": `<style>.gdht4sb7j {
  cx: 24px;
  cy: 24px;
  r: 7.905px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.kohzsueys {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.195 21.93h-2.39L21.61 24l1.195 2.07h2.39L26.39 24zM26.39 24l3.217 5.573M18.393 18.427L21.61 24m4.412-7.642l-3.217 5.572m2.39 4.14l-3.217 5.572m.827-5.572h-6.436m8.826-4.14h6.436");
}

.sq-5b73lx {
  cx: 37.703px;
  cy: 15.622px;
  r: 2.635px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z3wnwxb0h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.284 9.824H8.716A4.216 4.216 0 0 0 4.5 14.04v19.92a4.216 4.216 0 0 0 4.216 4.216h30.568a4.216 4.216 0 0 0 4.216-4.217V14.041a4.216 4.216 0 0 0-4.216-4.217");
}
</style><path class="z3wnwxb0h"/><circle class="sq-5b73lx"/><circle class="gdht4sb7j"/><path class="kohzsueys"/>`,
		"fallback": "arcticons:samsung-camera-expert-raw",
	});
}

export default Component;
