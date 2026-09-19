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
		"content": `<style>.hh97s2b4g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.029 20v6a2 2 0 1 1-4 0v-.664M26.571 20v8m0-3.3a2 2 0 1 1 4 0V28");
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

.o15l0-bid {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.771 22.7V28m-11.616-.447c.365.307.76.447 1.645.447h.449c.73 0 1.322-.593 1.322-1.325s-.592-1.325-1.322-1.325h-.898c-.73 0-1.322-.593-1.322-1.325s.592-1.325 1.322-1.325h.449c.885 0 1.28.14 1.645.447M38.971 28v-3.3a2 2 0 1 0-4 0m0 3.3v-5.3m-19.942 2a2 2 0 1 1 4 0V26a2 2 0 1 1-4 0z");
}

.pi49wpbjr {
  cx: 32.771px;
  cy: 20.25px;
  r: 0.7px;
  fill: currentColor;
}
</style><rect class="j3s9ivbxi"/><path class="hh97s2b4g"/><circle class="pi49wpbjr"/><path class="o15l0-bid"/>`,
		"fallback": "arcticons:joshin",
	});
}

export default Component;
