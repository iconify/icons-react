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

.zgjk43bng {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.505 32.411v-9.476m5.663 9.476v-14.86m5.664 14.86V12.168m5.663 20.243V20.355");
}
</style><circle class="cpk0fnbgt"/><path class="zgjk43bng"/>`,
		"fallback": "arcticons:mynoise",
	});
}

export default Component;
