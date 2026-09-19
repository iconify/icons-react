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
		"content": `<style>.dun31actk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.784 35.573h23.978c13.016 0 10.84-19.586-2.215-15.243c0-10.876-19.586-10.876-19.586 2.178C2.073 20.33 2.073 35.573 10.784 35.573");
}

.zaw6jxdwu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.67 19.195l-7.543 13l-4.385-7.556");
}
</style><path class="zaw6jxdwu"/><path class="dun31actk"/>`,
		"fallback": "arcticons:verizon-cloud",
	});
}

export default Component;
