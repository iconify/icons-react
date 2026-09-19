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
		"content": `<style>.ffv05rb7v {
  fill: currentColor;
  d: path("M17 4h-3V2h-4v2H7v18h10zm-4 14h-2v-2h2zm0-4h-2V9h2z");
}
</style><path class="ffv05rb7v"/>`,
		"fallback": "ic:sharp-battery-alert",
	});
}

export default Component;
