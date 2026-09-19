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

.zbxynsyfb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.8 29.55L13.25 24l5.55-5.55m10.4 0L34.75 24l-5.55 5.55M15.319 42.5l17.362-37");
}
</style><rect class="j3s9ivbxi"/><path class="zbxynsyfb"/>`,
		"fallback": "arcticons:termuc",
	});
}

export default Component;
