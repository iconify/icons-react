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
		"content": `<style>.g2wj9jbhp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4");
}

.rc6kf1v5g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.643 26.554h1.43l1.984-4.063l2.01 9.737l1.82-14.38l1.851 10.846l1.817-4.142l1.908 5.154l1.86-3.425h22.034");
}
</style><path class="g2wj9jbhp"/><path class="rc6kf1v5g"/>`,
		"fallback": "arcticons:spph-connect",
	});
}

export default Component;
