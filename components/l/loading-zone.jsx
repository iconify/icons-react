import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bpwzzk36d {
  d: path("M13 10.5h5.5m-2.25-2.25l2.25 2.25l-2.25 2.25");
}

.cujvaacjm {
  cx: 13.5px;
  cy: 18px;
  r: 1.75px;
}

.g9b4xgbmw {
  cx: 18.5px;
  cy: 18px;
  r: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mpjzhb6td {
  width: 4.5px;
  height: 4.5px;
  x: 2.75px;
  y: 8.25px;
  rx: 0.75px;
}

.rbd-fe7yh {
  width: 11px;
  height: 11.5px;
  x: 10.25px;
  y: 4.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="rbd-fe7yh"/><path class="bpwzzk36d"/><rect class="mpjzhb6td"/><circle class="cujvaacjm"/><circle class="g9b4xgbmw"/></g>`,
		"fallback": "iconoven:loading-zone",
	});
}

export default Component;
