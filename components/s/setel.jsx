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
		"content": `<style>.mfvf950lk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.622L4.798 31.396h38.404zm19.202 28.774L24 45.377L4.798 31.396");
}

.wl112cq5b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.594 31.392L24 45.378l-9.594-13.986L24 2.627z");
}
</style><path class="mfvf950lk"/><path class="wl112cq5b"/>`,
		"fallback": "arcticons:setel",
	});
}

export default Component;
