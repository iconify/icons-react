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
		"content": `<style>.t21ozyb5t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.169 23.613v-7.44a2 2 0 0 1 2-2h9.508a2 2 0 0 1 2 2v27.476h-8.79");
}

.tev90cc-i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.379 23.613h9.508a2 2 0 0 1 2 2v18.036H11.379a2 2 0 0 1-2-2V25.613a2 2 0 0 1 2-2m15.58-9.44V6.649a2 2 0 0 1 2-2h9.508a2 2 0 0 1 2 2v35a2 2 0 0 1-2 2h-6.79");
}
</style><path class="tev90cc-i"/><path class="t21ozyb5t"/>`,
		"fallback": "arcticons:microsoft-power-bi",
	});
}

export default Component;
