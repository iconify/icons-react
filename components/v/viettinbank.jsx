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

.omsy6jbrb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.522 33.114c5.84-3 12.461-4.692 19.478-4.692s13.638 1.693 19.478 4.692");
}

.u-s-_zbez {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.166 17.211H29.78m-11.614 0v11.59m11.614-11.59v11.58");
}
</style><path class="u-s-_zbez"/><circle class="cpk0fnbgt"/><path class="omsy6jbrb"/>`,
		"fallback": "arcticons:viettinbank",
	});
}

export default Component;
