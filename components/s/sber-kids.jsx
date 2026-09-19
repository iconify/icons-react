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
		"content": `<style>.iaf1nxqhn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.405 21.988a21.499 21.499 0 1 1-8.95-15.513");
}

.lykjsgq5l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.042 21.39L24 26.682l18.28-13.998");
}
</style><path class="iaf1nxqhn"/><path class="lykjsgq5l"/>`,
		"fallback": "arcticons:sber-kids",
	});
}

export default Component;
