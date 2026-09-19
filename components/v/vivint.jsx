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
		"content": `<style>.ip0rdvb2p {
  cx: 39.18px;
  cy: 35.12px;
  r: 4.32px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zw9jrubtm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.55 8.83l-12 10.92a3.24 3.24 0 0 0-1.06 2.4v16.22a1.08 1.08 0 0 0 1.08 1.08H31a1.08 1.08 0 0 0 1.08-1.08V22.15a3.24 3.24 0 0 0-1.08-2.4L19 8.83a1.09 1.09 0 0 0-1.45 0");
}
</style><path class="zw9jrubtm"/><circle class="ip0rdvb2p"/>`,
		"fallback": "arcticons:vivint",
	});
}

export default Component;
