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
		"content": `<style>.actz7ubnp {
  width: 5.069px;
  height: 6.717px;
  x: 20.375px;
  y: 25.72px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.535px;
  ry: 2.535px;
}

.ic9finbpf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.963 20.132v-7.991l4 8l4-7.988v7.988m7.481 5.579v7.604c0 1.4-1.135 2.535-2.534 2.535h0c-.7 0-1.334-.284-1.793-.742");
}

.ii5jc6b4w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.002 14.84v3.3a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-3.3m-2.198 10.88v6.717m10.233-6.717v6.717m-13.005-4.182c0-1.4-1.135-2.535-2.535-2.535h0a2.535 2.535 0 0 0-2.534 2.535v1.648c0 1.4 1.134 2.534 2.534 2.534h0c1.4 0 2.535-1.135 2.535-2.535m0 2.535V22.298");
}

.rv4vmeb3v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.002 18.14v2.7a2 2 0 0 1-2 2h0a2 2 0 0 1-1.414-.585");
}

.uo47pyvli {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 42.5h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4");
}
</style><path class="uo47pyvli"/><path class="ic9finbpf"/><rect transform="matrix(-1 0 0 -1 45.82 58.157)" class="actz7ubnp"/><path class="rv4vmeb3v"/><path class="ii5jc6b4w"/>`,
		"fallback": "arcticons:my-digi",
	});
}

export default Component;
