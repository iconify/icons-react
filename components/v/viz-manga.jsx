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
		"content": `<style>.gj_bv8suv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 18.497c0 6.078 4.927 11.006 11.006 11.006V18.497m6.989 0H38.5c-6.078 0-11.005 4.928-11.005 11.006H38.5M24 18.497v10.765");
}

.jc1oydeao {
  width: 39px;
  height: 31px;
  x: 4.5px;
  y: 8.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="jc1oydeao"/><path class="gj_bv8suv"/>`,
		"fallback": "arcticons:viz-manga",
	});
}

export default Component;
