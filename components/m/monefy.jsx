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
		"content": `<style>.gizx4mbdc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.705 14.2h-4.95A2.254 2.254 0 0 0 5.5 16.454h0v24.022a1.93 1.93 0 0 0 1.93 1.93h30.162a1.93 1.93 0 0 0 1.93-1.93v-4.44m2.978 3.93V16.98a2.78 2.78 0 0 0-2.78-2.78h-1.65");
}

.ng3nb6jjs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.512 33.423a3.843 3.843 0 0 1 0-7.687m0 7.687h4l2.955-1.817m-6.955-5.87h4l2.955-1.816m-5.285-6.39l-2.377-6.134l-15.424 6.226m12.882-5.46l-4.984-6.568l-16.076 11.902");
}

.tgazs0vcj {
  cx: 35.161px;
  cy: 29.579px;
  r: 0.634px;
  fill: currentColor;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.v5uxfpbgx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.523 23.115v-4.4a1.003 1.003 0 0 0-1.004-1.003H9.553");
}
</style><path class="v5uxfpbgx"/><path class="gizx4mbdc"/><path class="ng3nb6jjs"/><circle class="tgazs0vcj"/>`,
		"fallback": "arcticons:monefy",
	});
}

export default Component;
