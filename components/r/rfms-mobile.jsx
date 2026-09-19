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

.lttzylscx {
  d: path("M17.02 5.502c0 .053-7.514 7.935 1.524 13.82c6.757 4.401 23.647 3.574 23.647 3.574");
}

.v8bv8tz6j {
  d: path("M6.529 6.825L34.072 42.5l8.119-19.656");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="lttzylscx"/><path class="v8bv8tz6j"/></g><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:rfms-mobile",
	});
}

export default Component;
