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
		"content": `<style>.e8_j36bcm {
  cx: 23.25px;
  cy: 9px;
  r: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.remkdlbvl {
  cx: 20.25px;
  cy: 33.5px;
  r: 10px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.v184tjueq {
  cx: 29.75px;
  cy: 26.5px;
  r: 8px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="e8_j36bcm"/><circle class="v184tjueq"/><circle class="remkdlbvl"/>`,
		"fallback": "arcticons:limango",
	});
}

export default Component;
