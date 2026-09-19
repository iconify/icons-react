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
		"content": `<style>.expm-pbwx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.72 22.749l-2.281-1.316l-2.28-1.317l-2.281-1.317l-2.28-1.316l-2.281-1.317l-2.28-1.316l-2.281-1.317v7.85L8.037 22.7v2.617l2.28 1.316V21.4l2.281 1.316v-2.617l2.28 1.317v5.234l2.281 1.316v-2.617l2.28 1.317v2.617l2.281 1.316v-2.616L24 29.299v-5.233z");
}

.jt3nzbkaa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 45L5.756 34.467V13.533L24 24.066z");
}

.p67sessdx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.243 34.467L24 45V24.066l18.243-10.533z");
}

.tbm3pobcq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m39.963 14.85l-2.28 1.316l-2.281 1.317l-2.28 1.316l-2.281 1.317l-2.28 1.317l-2.281 1.316L24 24.066v7.85l2.28-1.317v2.617l2.281-1.316v-5.234l2.28-1.317v-2.616l2.281-1.317v5.234l2.28-1.317v-2.617l2.281-1.316v2.616l2.28-1.316v-2.617l2.28-1.317v-5.233z");
}

.tjy1rabhv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 24.066L5.756 13.533L24 3l18.243 10.533z");
}
</style><path class="jt3nzbkaa"/><path class="expm-pbwx"/><path class="tjy1rabhv"/><path class="p67sessdx"/><path class="tbm3pobcq"/>`,
		"fallback": "arcticons:minecraft",
	});
}

export default Component;
