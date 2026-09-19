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
		"content": `<style>.rc6-mer4x {
  cx: 15.33px;
  cy: 30.45px;
  r: 2.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.u71rd2b9t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.881 39.5h-7.38a3.99 3.99 0 0 1-4-4v-23c0-2.216 1.783-4 4-4h7.38m16.238 0h7.38c2.217 0 4 1.784 4 4v23c0 2.216-1.783 4-4 4h-7.38m-3.779-9.05V14.79m-6.78 11.75l13.56-7.83m0 7.83l-13.56-7.83");
}
</style><path class="u71rd2b9t"/><circle class="rc6-mer4x"/>`,
		"fallback": "arcticons:regex",
	});
}

export default Component;
