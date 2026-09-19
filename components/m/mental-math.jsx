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
		"content": `<style>.e42it5b9j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.752 34.14h13.683");
}

.l1as1204e {
  cx: 34.499px;
  cy: 27.267px;
  r: 1.026px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ooqs5kn1x {
  cx: 34.499px;
  cy: 40.698px;
  r: 1.026px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.pio0mcb4d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 14.775h16.998M14 6.276v16.998m-6.012 4.66l12.02 12.02m0-12.02l-12.02 12.02M26.84 14.775H42.5");
}
</style><path class="pio0mcb4d"/><circle class="ooqs5kn1x"/><circle class="l1as1204e"/><path class="e42it5b9j"/>`,
		"fallback": "arcticons:mental-math",
	});
}

export default Component;
