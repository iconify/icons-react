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
		"content": `<style>.ccs1kmb8v {
  cx: 4.75px;
  cy: 19.25px;
  r: 2px;
}

.e9-7-8-2z {
  cx: 12px;
  cy: 4.75px;
  r: 2px;
}

.esaucociw {
  d: path("m10.95 6.45l-2.4 3.85m4.66-3.96l3.08 4.07m-9.5 3.46l-1.33 3.51m2.75-3.51l1.33 3.51M17.5 14v3.25");
}

.gw7frccqd {
  cx: 10.25px;
  cy: 19.25px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qparmibsf {
  cx: 7.5px;
  cy: 12px;
  r: 2px;
}

.vzfjefbad {
  cx: 17.5px;
  cy: 12px;
  r: 2px;
}

.ye6maf4he {
  cx: 17.5px;
  cy: 19.25px;
  r: 2px;
}
</style><g class="hntgybcog"><path class="esaucociw"/><circle class="e9-7-8-2z"/><circle class="qparmibsf"/><circle class="vzfjefbad"/><circle class="ccs1kmb8v"/><circle class="gw7frccqd"/><circle class="ye6maf4he"/></g>`,
		"fallback": "iconoven:plan-tree",
	});
}

export default Component;
