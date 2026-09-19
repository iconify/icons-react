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
		"content": `<style>.anu0k9b3t {
  cx: 24px;
  cy: 25.266px;
  r: 7.339px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.kf6obtowj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.323 18.434A7.342 7.342 0 0 1 24 4.26a7.34 7.34 0 0 1 2.677 14.175m-10.015 6.998a7.34 7.34 0 1 1 1.515-4.636m11.93 8.538a7.34 7.34 0 1 1-4.114 2.993m-3.989-.006a7.34 7.34 0 1 1-4.111-2.987m11.93-8.545a7.34 7.34 0 1 1 1.509 4.634");
}
</style><circle class="anu0k9b3t"/><path class="kf6obtowj"/>`,
		"fallback": "arcticons:omnivox",
	});
}

export default Component;
