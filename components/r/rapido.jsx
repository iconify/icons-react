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
		"content": `<style>.dwd7gsbro {
  cx: 23.876px;
  cy: 10.209px;
  r: 2.229px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ycmsskeoh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.5 4.877a1.237 1.237 0 1 1 .029 1.749a1.237 1.237 0 0 1-.03-1.75m25.001.001a1.237 1.237 0 1 1-1.748-.03a1.237 1.237 0 0 1 1.749.03M16.74 34.523c-.107-11.532 14.26-11.3 14.62 0m-14.62 0V15.658m0 0h14.62m0 0v18.865m-7.552-5.901l.006 14.878");
}
</style><path class="ycmsskeoh"/><circle class="dwd7gsbro"/>`,
		"fallback": "arcticons:rapido",
	});
}

export default Component;
