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
		"content": `<style>.bjcf95bza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.066 28.992v3.441a9.176 9.176 0 0 1-9.176 9.176H17.067a9.176 9.176 0 0 1-9.176-9.176v-3.44");
}

.dk2uog6xi {
  cx: 37.819px;
  cy: 12.125px;
  r: 0.75px;
  fill: currentColor;
}

.j3_x6r5xa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.273 27.071v7.204l3.409-5.283");
}

.jg-fcvo0q {
  cx: 37.819px;
  cy: 12.125px;
  r: 3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.jm5-v-sfk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.979 38.168h6.912a9.176 9.176 0 0 0 9.175-9.176v-5.867a9.12 9.12 0 0 0-1.76-5.39a5.682 5.682 0 1 0-5.771-3.631a9 9 0 0 0-1.644-.155H17.067a9 9 0 0 0-1.644.155a5.655 5.655 0 1 0-5.771 3.632a9.12 9.12 0 0 0-1.76 5.389v5.867a9.176 9.176 0 0 0 9.175 9.176z");
}

.jyczl8bji {
  cx: 10.138px;
  cy: 12.125px;
  r: 3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.nqnwq1rgr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.273 27.071l6.496-4.318l-3.087 6.239l4.438 3.257l4.116-14.465l-16.301 6.168z");
}

.wcredvb9p {
  cx: 10.138px;
  cy: 12.125px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="nqnwq1rgr"/><path class="j3_x6r5xa"/><circle class="jyczl8bji"/><path class="jm5-v-sfk"/><path class="bjcf95bza"/><circle class="jg-fcvo0q"/><circle class="dk2uog6xi"/><circle class="wcredvb9p"/>`,
		"fallback": "arcticons:linwood-butterfly-alt",
	});
}

export default Component;
