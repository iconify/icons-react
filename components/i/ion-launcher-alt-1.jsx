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
		"content": `<style>.ci4j2zbwf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.91 19.595L24 8.5l19.09 11.095");
}

.kgkmrccgd {
  cx: 24px;
  cy: 27.753px;
  r: 11.747px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="kgkmrccgd"/><path class="ci4j2zbwf"/>`,
		"fallback": "arcticons:ion-launcher-alt-1",
	});
}

export default Component;
