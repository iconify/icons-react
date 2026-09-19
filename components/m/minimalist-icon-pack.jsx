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

.r1fr4ybqi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 33.25H24v9.25m9.25-9.25V5.5M42.5 24h-9.25M24 42.5l9.25-9.25M42.5 14.5h-9.25");
}
</style><path class="r1fr4ybqi"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:minimalist-icon-pack",
	});
}

export default Component;
