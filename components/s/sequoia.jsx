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

.gxhlbrhdb {
  cx: 33.116px;
  cy: 22.096px;
  r: 2.047px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.k_573kbyb {
  cx: 24px;
  cy: 10.43px;
  r: 2.047px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lkp16ccie {
  cx: 14.884px;
  cy: 24.969px;
  r: 2.047px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mt6c5myog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.457 19.044H24m-7.069 5.925H24m-2.543 5.925H24");
}

.ney6pwu7c {
  cx: 19.411px;
  cy: 19.044px;
  r: 2.047px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.npusgdy0n {
  cx: 19.411px;
  cy: 30.894px;
  r: 2.047px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ooru31b3b {
  cx: 28.589px;
  cy: 28.02px;
  r: 2.047px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.riswa0bgg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 45.5V12.477");
}

.wx-xlebfk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.543 16.171H24m7.069 5.925H24m2.543 5.924H24");
}

.z9ado3b3s {
  cx: 28.589px;
  cy: 16.171px;
  r: 2.047px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><circle class="k_573kbyb"/><path class="riswa0bgg"/><circle class="ney6pwu7c"/><circle class="lkp16ccie"/><circle class="npusgdy0n"/><path class="mt6c5myog"/><circle class="z9ado3b3s"/><circle class="gxhlbrhdb"/><circle class="ooru31b3b"/><path class="wx-xlebfk"/>`,
		"fallback": "arcticons:sequoia",
	});
}

export default Component;
