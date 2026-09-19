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
		"content": `<style>.d1bmhbmcn {
  cx: 10.64px;
  cy: 24px;
  r: 5.14px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.d8dow8jnh {
  cx: 24px;
  cy: 24px;
  r: 5.14px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.dqrnerqbn {
  cx: 37.36px;
  cy: 37.36px;
  r: 5.14px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fqdx14vii {
  cx: 24px;
  cy: 37.36px;
  r: 5.14px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ju28bbctx {
  cx: 10.64px;
  cy: 10.64px;
  r: 5.14px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lzd67abzj {
  cx: 37.36px;
  cy: 10.64px;
  r: 5.14px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.okavaj3da {
  cx: 10.64px;
  cy: 37.36px;
  r: 5.14px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.t_o5q7bvk {
  cx: 37.36px;
  cy: 24px;
  r: 5.14px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.u91atmj0i {
  cx: 24px;
  cy: 10.64px;
  r: 5.14px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="ju28bbctx"/><circle class="u91atmj0i"/><circle class="lzd67abzj"/><circle class="d1bmhbmcn"/><circle class="d8dow8jnh"/><circle class="t_o5q7bvk"/><circle class="okavaj3da"/><circle class="fqdx14vii"/><circle class="dqrnerqbn"/>`,
		"fallback": "arcticons:simpleapplauncher",
	});
}

export default Component;
