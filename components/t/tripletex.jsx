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
		"content": `<style>.bwzo9ebvp {
  cx: 17.651px;
  cy: 36.771px;
  r: 6.729px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.e_0c0ubey {
  cx: 30.349px;
  cy: 24px;
  r: 6.729px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fhgm464ky {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.651 36.771V43.5");
}

.n9wp5fb2l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.651 11.229l4.758-4.758");
}

.uxc1rib-b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.349 24h6.73");
}

.wn0_xwaij {
  cx: 17.651px;
  cy: 11.229px;
  r: 6.729px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="e_0c0ubey"/><path class="uxc1rib-b"/><circle class="wn0_xwaij"/><path class="n9wp5fb2l"/><circle class="bwzo9ebvp"/><path class="fhgm464ky"/>`,
		"fallback": "arcticons:tripletex",
	});
}

export default Component;
