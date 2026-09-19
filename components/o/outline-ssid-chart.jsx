import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dxqpkenrq {
  fill: currentColor;
  d: path("M21 5.47L12 12L7.62 7.62L3 11V8.52L7.83 5l4.38 4.38L21 3zM21 15h-4.7l-4.17 3.34L6 12.41l-3 2.13V17l2.8-2l6.2 6l5-4h4z");
}
</style><path class="dxqpkenrq"/>`,
		"fallback": "ic:outline-ssid-chart",
	});
}

export default Component;
