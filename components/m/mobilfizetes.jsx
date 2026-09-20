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
		"content": `<style>.n0-xmhsks {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.405 5.114a2 2 0 0 0-1.732 1l-3.057 5.295l3.635 6.294L9.616 24l3.635 6.297l-3.635 6.295l3.057 5.295a2 2 0 0 0 1.732 1h19.5a2 2 0 0 0 1.733-1L45.388 25a2 2 0 0 0 0-2l-9.75-16.887a2 2 0 0 0-1.733-1h-19.5");
}

.vccm9gbay {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.25 17.704h7.27L24.155 24l-3.635 6.296h-7.27L9.616 24H2.345");
}
</style><path class="n0-xmhsks"/><path class="vccm9gbay"/>`,
		"fallback": "arcticons:mobilfizetes",
	});
}

export default Component;
