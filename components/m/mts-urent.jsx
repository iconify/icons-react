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
		"content": `<style>.duamlqpkz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.893 15.995c0 .83-.675 1.504-1.508 1.504h0a1.506 1.506 0 0 1 0-3.012h0c.833 0 1.508.673 1.508 1.504zm7.245 2.245c0 .83-.675 1.504-1.508 1.504h0a1.506 1.506 0 0 1 0-3.012h0c.833 0 1.508.674 1.508 1.504zm5.095 2.43v9.26a3.575 3.575 0 0 1-3.568 3.583H17.358a3.575 3.575 0 0 1-3.59-3.56v-9.279");
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
</style><path class="duamlqpkz"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:mts-urent",
	});
}

export default Component;
