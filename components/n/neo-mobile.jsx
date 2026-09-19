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
		"content": `<style>.ddik3abxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13 29.114V18.886l6.776 10.228V18.886m7.277 8.938c-.44.77-1.27 1.29-2.222 1.29h0a2.557 2.557 0 0 1-2.557-2.557v-1.662a2.557 2.557 0 0 1 2.557-2.557h0a2.557 2.557 0 0 1 2.557 2.557v.831h-5.114m7.612-.831a2.557 2.557 0 1 1 5.114 0v1.662a2.557 2.557 0 1 1-5.114 0z");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><path class="ddik3abxh"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:neo-mobile",
	});
}

export default Component;
