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
		"content": `<style>.j4s1ueoeq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.444 25.179v7.481L24 42.5m16.444-37v7.481L30.251 19.08M7.556 5.5h32.888");
}

.yf0sgtiyb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.444 25.179L7.556 5.5m27.792 30.21L7.556 19.08v13.58L24 42.5");
}
</style><path class="yf0sgtiyb"/><path class="j4s1ueoeq"/>`,
		"fallback": "arcticons:swift-backup",
	});
}

export default Component;
