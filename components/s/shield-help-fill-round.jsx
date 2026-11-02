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
		"content": `<style>.pw4a2-bbx {
  fill: currentColor;
  d: path("M8 2h8a5 5 0 0 1 5 5v3c-.001 5.712-3.495 9.647-8.594 11.914a1 1 0 0 1-.812 0C6.495 19.647 3.001 15.712 3 10V7a5 5 0 0 1 5-5m1 8a1 1 0 0 0 2 0a1.001 1.001 0 0 1 1.707-.707a1 1 0 0 1 .215 1.094A.99.99 0 0 1 12 11a1 1 0 0 0 0 2a3 3 0 1 0-3-3m3 4a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="pw4a2-bbx"/>`,
		"fallback": "coolicons:shield-help-fill-round",
	});
}

export default Component;
