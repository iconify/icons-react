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
		"content": `<style>.jxfayx98j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.291 10.78a9.25 9.25 0 1 0-6.54 15.79h18.5A9.25 9.25 0 1 0 24 17.32v15.931");
}

.mly2fubel {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.681 26.57a6.68 6.68 0 1 1-6.68 6.68a6.68 6.68 0 1 1-6.68-6.68");
}
</style><path class="mly2fubel"/><path class="jxfayx98j"/>`,
		"fallback": "arcticons:wanderlog",
	});
}

export default Component;
