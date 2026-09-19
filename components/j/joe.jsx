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
		"content": `<style>.kfqvosbcv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 24a6.488 6.488 0 1 0 12.975 0v-6.488M43.5 24a6.488 6.488 0 1 1-1.9-4.588l-9.175 9.176");
}

.tp7zmcblf {
  cx: 23.956px;
  cy: 24px;
  r: 6.488px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="tp7zmcblf"/><path class="kfqvosbcv"/>`,
		"fallback": "arcticons:joe",
	});
}

export default Component;
