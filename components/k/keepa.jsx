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
		"content": `<style>.df32n3b3a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.463 18.134H40.5a2 2 0 0 1 2 2v7.732a2 2 0 0 1-2 2H30.463a1.5 1.5 0 0 1-1.5-1.5v-8.732a1.5 1.5 0 0 1 1.5-1.5m-22.963 0h10.037a1.5 1.5 0 0 1 1.5 1.5v8.732a1.5 1.5 0 0 1-1.5 1.5H7.5a2 2 0 0 1-2-2v-7.732a2 2 0 0 1 2-2");
}

.nt7le5bqc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.866 30.464V40.5a2 2 0 0 1-2 2h-7.732c-1.103 0-2-.896-2-2V30.464a1.5 1.5 0 0 1 1.5-1.5h8.732a1.5 1.5 0 0 1 1.5 1.5m0-22.964v10.036a1.5 1.5 0 0 1-1.5 1.5h-8.732a1.5 1.5 0 0 1-1.5-1.5V7.5a2 2 0 0 1 2-2h7.732c1.103 0 2 .896 2 2");
}
</style><path class="df32n3b3a"/><path class="nt7le5bqc"/>`,
		"fallback": "arcticons:keepa",
	});
}

export default Component;
