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
		"content": `<style>.sk1301yss {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 36.616c3.424 0 6.86.701 10.939.701c4.728 0 8.561-5.962 8.561-13.317s-3.833-13.317-8.561-13.317c-4.08 0-7.515.701-10.939.701s-6.86-.701-10.939-.701C8.333 10.683 4.5 16.645 4.5 24s3.833 13.317 8.561 13.317c4.08 0 7.515-.701 10.939-.701M13.5 21.25h21");
}
</style><path class="sk1301yss"/>`,
		"fallback": "arcticons:vandle-card",
	});
}

export default Component;
