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
		"content": `<style>.hxfwwt9-h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.175 21.055V31.49m16.098-10.46l-5.253 6.703m9.22-6.703l-2.441 3.254l1.716 2.777h5.341c3.36 0 3.428-9.98-.3-10.064h-5.519M8.788 21.065l10.01-.035l2.3 2.812l-3.06 3.891");
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
</style><path class="hxfwwt9-h"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:russian-railway-passengers",
	});
}

export default Component;
