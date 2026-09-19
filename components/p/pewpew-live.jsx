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
		"content": `<style>.fn1rt9b4s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.472 35.497l19.02.377L42.5 23L31 42.5zm29.056-22.994l-19.021-.377L5.5 25L17 5.5z");
}

.phoqnzu0y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.75 27.5l2.12-6.802l22.241-2.416l-18.269 12.913z");
}
</style><path class="fn1rt9b4s"/><path class="phoqnzu0y"/>`,
		"fallback": "arcticons:pewpew-live",
	});
}

export default Component;
