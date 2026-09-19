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
		"content": `<style>.d8rltlqjh {
  cx: 35.053px;
  cy: 29.373px;
  r: 3.378px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.gghnh9uhd {
  cx: 34.442px;
  cy: 7.878px;
  r: 3.378px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.iw52ydbub {
  cx: 24.307px;
  cy: 40.122px;
  r: 3.378px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.m6ss2c18m {
  cx: 12.947px;
  cy: 7.878px;
  r: 3.378px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mimmxp_4f {
  cx: 35.053px;
  cy: 18.627px;
  r: 3.378px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.sozvyl5qb {
  cx: 24.307px;
  cy: 29.373px;
  r: 3.378px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.td7wxqdcy {
  cx: 13.558px;
  cy: 29.373px;
  r: 3.378px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xr9kbdmoq {
  cx: 24.307px;
  cy: 18.627px;
  r: 3.378px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z3ue__b7z {
  cx: 13.558px;
  cy: 18.627px;
  r: 3.378px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z8sr7fbzn {
  cx: 23.693px;
  cy: 7.878px;
  r: 3.378px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="m6ss2c18m"/><circle class="z8sr7fbzn"/><circle class="gghnh9uhd"/><circle class="z3ue__b7z"/><circle class="xr9kbdmoq"/><circle class="mimmxp_4f"/><circle class="td7wxqdcy"/><circle class="sozvyl5qb"/><circle class="d8rltlqjh"/><circle class="iw52ydbub"/>`,
		"fallback": "arcticons:openinwhatsapp",
	});
}

export default Component;
