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
		"content": `<style>.jc_ptrbdh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 26h6.75v16.5H5.5zm9.75 0H22v16.5h-6.75zM5.5 5.5a8.25 8.25 0 0 1 0 16.5z");
}

.kcs9aybds {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22 22a8.25 8.25 0 0 1 0-16.5zm20.5 0h-8.25a8.25 8.25 0 1 1 8.25-8.25z");
}

.x3x6dmp9r {
  cx: 34.25px;
  cy: 34.25px;
  r: 8.25px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="jc_ptrbdh"/><path class="kcs9aybds"/><circle class="x3x6dmp9r"/>`,
		"fallback": "arcticons:mercari-hello",
	});
}

export default Component;
