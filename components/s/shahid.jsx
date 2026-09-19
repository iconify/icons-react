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
		"content": `<style>.p097jmb0r {
  cx: 9.102px;
  cy: 15.07px;
  r: 4.602px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qtfjx4buw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.337 33.873V26.43h37.491v11.22h-7.802v-3.857c-9.886.02-19.844.03-29.689.079Z");
}

.tdc75hbwc {
  cx: 38.898px;
  cy: 14.979px;
  r: 4.602px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.uxxq3nb8o {
  cx: 23.913px;
  cy: 14.95px;
  r: 4.602px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="p097jmb0r"/><circle class="uxxq3nb8o"/><circle class="tdc75hbwc"/><path class="qtfjx4buw"/>`,
		"fallback": "arcticons:shahid",
	});
}

export default Component;
