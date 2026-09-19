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
		"content": `<style>.fs95zr-oz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.236 31.248c-1.804-1.88-2.88-4.443-2.88-7.248s1.076-5.368 2.88-7.248M9.747 37.298C6.486 33.811 4.5 29.14 4.5 24s1.986-9.81 5.246-13.298m22.018 6.05c1.804 1.88 2.88 4.443 2.88 7.248s-1.076 5.368-2.88 7.248m6.49-20.546C41.514 14.189 43.5 18.86 43.5 24s-1.986 9.81-5.246 13.298");
}

.ps4xiqbrp {
  cx: 24px;
  cy: 24px;
  r: 3.651px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="ps4xiqbrp"/><path class="fs95zr-oz"/>`,
		"fallback": "arcticons:meshcore",
	});
}

export default Component;
