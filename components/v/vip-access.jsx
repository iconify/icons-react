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
		"content": `<style>.j4pch3but {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.139 19.695a25.8 25.8 0 0 1 9.968 11.283c2.243-4.282 12.507-19.643 19.44-25.42");
}

.xirggixkk {
  cx: 23.453px;
  cy: 24px;
  r: 20px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="xirggixkk"/><path class="j4pch3but"/>`,
		"fallback": "arcticons:vip-access",
	});
}

export default Component;
