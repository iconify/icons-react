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

.v7tzuh39k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.904 29.598V18.395h1.867a5.602 5.602 0 1 1 0 11.203zm11.013-11.159H37.5m-5.583 5.583h3.641m-3.641-5.583v11.166m-21.417 0V18.402h3.734a3.734 3.734 0 0 1 0 7.469H10.5");
}
</style><path class="v7tzuh39k"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:pdf-viewer",
	});
}

export default Component;
