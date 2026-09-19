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
		"content": `<style>.b_r7lfn8m {
  width: 24px;
  height: 39px;
  x: 12px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  rx: 2px;
  ry: 2px;
}

.vaq46_bqf {
  cx: 24px;
  cy: 10px;
  r: 2px;
  fill: none;
  stroke: currentColor;
}
</style><rect class="b_r7lfn8m"/><circle class="vaq46_bqf"/>`,
		"fallback": "arcticons:lighthouse-pm",
	});
}

export default Component;
