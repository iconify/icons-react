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
		"content": `<style>.bm9a8gbww {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.86 42.5c-4.34-2.7-7.22-7.51-7.22-13c0-8.45 6.85-15.3 15.3-15.3c4.1 0 7.82 1.6 10.56 4.22");
}

.gifo9kbam {
  cx: 32.44px;
  cy: 30.439px;
  r: 2.76px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
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

.o723qj02p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.986 29.08l1.124-5.746a.51.51 0 0 0-.666-.58l-5.538 1.9a.51.51 0 0 0-.17.867l4.415 3.846a.51.51 0 0 0 .835-.287");
}

.u65ezzbwj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.43 5.5l6.565 5.668a9.74 9.74 0 0 1 2.865 4.26l2.795 8.283");
}
</style><path class="bm9a8gbww"/><rect class="j3s9ivbxi"/><path class="u65ezzbwj"/><circle class="gifo9kbam"/><path class="o723qj02p"/>`,
		"fallback": "arcticons:spowlo",
	});
}

export default Component;
