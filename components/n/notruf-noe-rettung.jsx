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

.r4dhwxjrz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.5 19.279l3.243-1.767v12.976m10.312 0V17.512l-6.965 8.717h8.596m10.183 4.259V17.512l-6.965 8.717H37.5");
}
</style><rect class="j3s9ivbxi"/><path class="r4dhwxjrz"/>`,
		"fallback": "arcticons:notruf-noe-rettung",
	});
}

export default Component;
