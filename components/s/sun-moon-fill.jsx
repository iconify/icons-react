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
		"content": `<style>.qitiwbmqm {
  fill: currentColor;
  d: path("M11 3a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Zm6.657 1.929a1 1 0 1 1 1.414 1.414l-1.414 1.414a.999.999 0 1 1-1.414-1.414ZM16 15a7 7 0 1 1-14 0c0-1.862.731-3.636 2.05-4.95a6.9 6.9 0 0 1 2.225-1.499A6.9 6.9 0 0 1 9 8a1 1 0 0 1 .625 1.781a3.265 3.265 0 0 0 0 5.105a3.27 3.27 0 0 0 4.594-.511A1.002 1.002 0 0 1 16 15m-1.172-5.828c.415.412.732.91.931 1.46a1 1 0 0 1-1.88.684a2 2 0 0 0-1.195-1.195a1 1 0 0 1 .684-1.88c.55.199 1.048.516 1.46.931M21 11a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2Z");
}
</style><path class="qitiwbmqm"/>`,
		"fallback": "coolicons:sun-moon-fill",
	});
}

export default Component;
