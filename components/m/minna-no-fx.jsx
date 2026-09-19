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
		"content": `<style>.emqiwuxtt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.582 27.333L35.445 42.5m0-15.167L25.582 42.5m-13.027-7.583h4.838m2.593-7.585h-7.444v15.166");
}

.fwtyt9bab {
  cx: 20.075px;
  cy: 10px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.75px;
  ry: 4.5px;
}

.h8nl8yk2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.489 13.773a3.5 3 0 0 1 .063.566a3.5 3 0 0 1-3.5 3a3.5 3 0 0 1-3.5-3a3.5 3 0 0 1 3.5-3a3.5 3 0 0 1 1.63.345");
}

.jm8reyb4d {
  cx: 36px;
  cy: 12.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6.5px;
  ry: 6px;
}

.yxx2_9bvx {
  cx: 8px;
  cy: 21.5px;
  r: 2.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="yxx2_9bvx"/><path class="h8nl8yk2k"/><ellipse class="fwtyt9bab"/><ellipse class="jm8reyb4d"/><path class="emqiwuxtt"/>`,
		"fallback": "arcticons:minna-no-fx",
	});
}

export default Component;
