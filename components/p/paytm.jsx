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
		"content": `<style>.c2yow8bry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.557 23.534v-7.992l4 8l4-7.987v7.987m-31.424 0v-8h2.619c1.48 0 2.68 1.203 2.68 2.687s-1.2 2.687-2.68 2.687h-2.62m16.516-5.374h5.3m-2.65 8v-8m-2.65 6.216v2.7a2 2 0 0 1-2 2h0a2 2 0 0 1-1.414-.586");
}

.qkqi4yb6l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.648 18.458v3.3a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-3.3m-1.906 3.064a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-1.3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2m0 3.3v-5.3");
}

.qp9x0sbbl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 19.6v18.9a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4zm0 12.9h37m-37-3.033h37");
}
</style><path class="qp9x0sbbl"/><path class="c2yow8bry"/><path class="qkqi4yb6l"/>`,
		"fallback": "arcticons:paytm",
	});
}

export default Component;
