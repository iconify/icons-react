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
		"content": `<style>.c2xrbabwq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 19.6v18.9a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4z");
}

.s7vuqcbth {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.56 30.4V17.6h2.88a5.6 5.6 0 0 1 5.6 5.6v1.6a5.6 5.6 0 0 1-5.6 5.6zm11.06-12.8v12.8m6.88 0L33.23 24l5.27-6.357M33.23 24h-1.61M9.754 28.998c.784 1.021 1.769 1.402 3.138 1.402h1.895a3.197 3.197 0 0 0 3.193-3.2h0c0-1.767-1.43-3.2-3.193-3.2h-2.094A3.197 3.197 0 0 1 9.5 20.8h0c0-1.767 1.43-3.2 3.193-3.2h1.895c1.37 0 2.354.38 3.139 1.403");
}
</style><path class="c2xrbabwq"/><path class="s7vuqcbth"/>`,
		"fallback": "arcticons:sdk-monitor",
	});
}

export default Component;
