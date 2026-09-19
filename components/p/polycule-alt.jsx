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

.wfe4lqbjj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.557 32.5l4.717-8.5l-4.717-8.5h-1.284l-8.302 17h-1.285L13.97 24l4.716-8.5");
}
</style><circle class="cpk0fnbgt"/><path class="wfe4lqbjj"/>`,
		"fallback": "arcticons:polycule-alt",
	});
}

export default Component;
