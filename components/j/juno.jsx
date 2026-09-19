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

.pmiahob6t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.942 13.5a5.85 5.85 0 0 1 5.336 5.84v9.297a5.85 5.85 0 0 1-5.863 5.863h-.86a5.85 5.85 0 0 1-5.833-5.265");
}
</style><path class="pmiahob6t"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:juno",
	});
}

export default Component;
