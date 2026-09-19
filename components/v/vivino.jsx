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
		"content": `<style>.bfs-fwd9q {
  cx: 20.163px;
  cy: 20.674px;
  r: 3.837px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.bvnje3bex {
  cx: 16.325px;
  cy: 27.322px;
  r: 3.837px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.h0mqs1b3d {
  cx: 20.163px;
  cy: 34.011px;
  r: 3.837px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hkd1p_-0c {
  cx: 24px;
  cy: 40.663px;
  r: 3.837px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.jvwlc0trw {
  cx: 27.837px;
  cy: 20.674px;
  r: 3.837px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lhckutb3w {
  cx: 27.837px;
  cy: 7.337px;
  r: 3.837px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lxcx9_y9l {
  cx: 24px;
  cy: 27.322px;
  r: 3.837px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.sf82gfbor {
  cx: 24px;
  cy: 13.981px;
  r: 3.837px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.urv_vjbxg {
  cx: 27.837px;
  cy: 34.011px;
  r: 3.837px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yoyq3tj0c {
  cx: 31.675px;
  cy: 27.322px;
  r: 3.837px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="lxcx9_y9l"/><circle class="sf82gfbor"/><circle class="hkd1p_-0c"/><circle class="yoyq3tj0c"/><circle class="bvnje3bex"/><circle class="urv_vjbxg"/><circle class="h0mqs1b3d"/><circle class="jvwlc0trw"/><circle class="lhckutb3w"/><circle class="bfs-fwd9q"/>`,
		"fallback": "arcticons:vivino",
	});
}

export default Component;
