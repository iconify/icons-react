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
		"content": `<style>.l5l3jdbed {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.659 5.5H40.5a2 2 0 0 1 2 2v6.213c0 4.762-3.866 8.628-8.628 8.628H27.66a2 2 0 0 1-2-2V7.5a2 2 0 0 1 2-2m-2.001 35.001V27.66a2 2 0 0 1 2-2h6.213c4.762 0 8.628 3.866 8.628 8.628V40.5a2 2 0 0 1-2 2H27.659a2 2 0 0 1-2-2");
}

.rfsa1eceo {
  width: 16.841px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
  ry: 2px;
}
</style><rect class="rfsa1eceo"/><path class="l5l3jdbed"/>`,
		"fallback": "arcticons:knockk",
	});
}

export default Component;
