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
		"content": `<style>.d1n_y_tdd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.5 18.597v10.806h5.403M20.456 24h3.523m1.88 5.403h-5.403V18.597h5.403m2.481 10.806V18.597h2.432a4.73 4.73 0 0 1 4.728 4.728v1.35a4.73 4.73 0 0 1-4.728 4.728z");
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
</style><path class="d1n_y_tdd"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:led-scroller",
	});
}

export default Component;
