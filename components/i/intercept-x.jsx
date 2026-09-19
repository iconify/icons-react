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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ib58g3ldj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.439 26.184L11.488 41.482M36.516 6.521L25.89 21.363M14.109 4.906l24.775 34.608M9.507 8.119l24.857 34.722");
}
</style><circle class="cpk0fnbgt"/><path class="ib58g3ldj"/>`,
		"fallback": "arcticons:intercept-x",
	});
}

export default Component;
