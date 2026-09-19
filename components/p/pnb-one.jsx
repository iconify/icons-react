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
		"content": `<style>.ahdekacqg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.487 26.247v-8.813l5.839 8.813v-8.813m1.767 4.406h2.873m1.534 4.407h-4.407v-8.813H38.5");
}

.kgg-4sbwt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.326 34.566V28h-6.241a8.525 8.525 0 0 1-15.573-4.798V20.05c0-2.162-1.012-2.615-1.012-2.615");
}

.rguz-mbtj {
  cx: 19.037px;
  cy: 23.202px;
  r: 5.768px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.uo47pyvli {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 42.5h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4");
}
</style><path class="ahdekacqg"/><circle class="rguz-mbtj"/><path class="kgg-4sbwt"/><path class="uo47pyvli"/>`,
		"fallback": "arcticons:pnb-one",
	});
}

export default Component;
