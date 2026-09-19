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
		"content": `<style>.bwpfisjxo {
  cx: 24.003px;
  cy: 21.43px;
  r: 5.311px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.edvt088ud {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.512 10.416a15.934 15.934 0 1 0-22.78 22.285l8.764 8.763a3.54 3.54 0 0 0 5.008 0l8.763-8.763a15.934 15.934 0 0 0 .245-22.285");
}

.jc91kobhq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.733 32.7a3.541 3.541 0 0 1 5.008-5.008l6.26 6.26l15.628-15.628");
}
</style><path class="edvt088ud"/><circle class="bwpfisjxo"/><path class="jc91kobhq"/>`,
		"fallback": "arcticons:tummoc",
	});
}

export default Component;
