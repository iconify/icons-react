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
		"content": `<style>.l0f3k-b_b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m32.656 20.58l-20.349 5.262l29.821 13.565");
}

.rm7p3qb_i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 7.69a2.1 2.1 0 0 0-1.823 1.052l-16.4 28.412A2.104 2.104 0 0 0 7.6 40.31h32.8a2.104 2.104 0 0 0 1.823-3.156l-16.4-28.412A2.1 2.1 0 0 0 24 7.689");
}
</style><path class="rm7p3qb_i"/><path class="l0f3k-b_b"/>`,
		"fallback": "arcticons:microsoft-clarity",
	});
}

export default Component;
