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
		"content": `<style>.j3s9ivbxi {
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

.wj2nyjbvw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.564 28.485V19.5l5.953 8.985V19.5m3.068 0v8.985m5.953-8.985v8.985m-5.953-4.509h5.953m3.068-4.461V28.5m0-3.13l4.83-5.825m0 8.955l-3.7-4.492");
}
</style><rect class="j3s9ivbxi"/><path class="wj2nyjbvw"/>`,
		"fallback": "arcticons:nhk-easy-news",
	});
}

export default Component;
