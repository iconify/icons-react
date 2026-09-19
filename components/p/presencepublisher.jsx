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
		"content": `<style>.dlhb5kbqq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 21.06v-3.63m14.72 10.06A15.68 15.68 0 0 0 30 18.34m13.5 7.43a20.74 20.74 0 0 0-14.76-13.16M9.28 27.49A15.68 15.68 0 0 1 18 18.34M4.5 25.77a20.74 20.74 0 0 1 14.76-13.16m4.74 0l1.79 4.58h-3.56z");
}

.lr7kxmqai {
  cx: 24px;
  cy: 30.56px;
  r: 4.84px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="dlhb5kbqq"/><circle class="lr7kxmqai"/>`,
		"fallback": "arcticons:presencepublisher",
	});
}

export default Component;
