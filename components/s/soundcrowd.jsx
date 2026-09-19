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

.kjq3_ktzo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.5 18.25v11.5m3.833-14.375v17.25M24 18.25v11.5m3.833-14.375v17.25M20.167 12.5v23m11.5-23v23");
}
</style><rect class="j3s9ivbxi"/><path class="kjq3_ktzo"/>`,
		"fallback": "arcticons:soundcrowd",
	});
}

export default Component;
