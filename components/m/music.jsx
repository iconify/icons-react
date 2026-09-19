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
		"content": `<style>.t9jw750lp {
  cx: 11.45px;
  cy: 37.74px;
  r: 5.76px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.v89m_cccs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m42.31 13.38l-25.1 3.48V7.98l25.1-3.48zm0 0v17.15m-25.1-13.67v20.88");
}

.w1qs9fdcc {
  cx: 36.55px;
  cy: 30.53px;
  r: 5.76px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="v89m_cccs"/><circle class="t9jw750lp"/><circle class="w1qs9fdcc"/>`,
		"fallback": "arcticons:music",
	});
}

export default Component;
