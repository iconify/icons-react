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
		"content": `<style>.f9ju_qbub {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21 14.75h4v18.5h-4z");
}

.momavlbkj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29 4.5H8.5v39H29c5.799 0 10.5-4.701 10.5-10.5a10.5 10.5 0 0 0-5.103-9.004A10.5 10.5 0 0 0 39.5 15c0-5.799-4.701-10.5-10.5-10.5");
}
</style><path class="momavlbkj"/><path class="f9ju_qbub"/>`,
		"fallback": "arcticons:kakao-bank",
	});
}

export default Component;
