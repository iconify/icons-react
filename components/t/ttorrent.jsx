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

.us7m9bcso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.288 15.166h11.623M28.1 32.834V15.166m-11.709 2.319v13.141a2.2 2.2 0 0 0 2.193 2.208h.658m-5.153-11.705h4.605");
}
</style><rect class="j3s9ivbxi"/><path class="us7m9bcso"/>`,
		"fallback": "arcticons:ttorrent",
	});
}

export default Component;
