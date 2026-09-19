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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.k6bnw650l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.772 39.36a1.31 1.31 0 0 1-1.312-1.312V16.02c0-3.12-2.53-5.66-5.66-5.66h-.29v22.028c0 .725.587 1.312 1.312 1.312H26.66c3.13 0 5.66 2.54 5.66 5.66z");
}

.rvnxq1bkd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.93 22.66v-1.256a2.665 2.665 0 0 0-2.664-2.665h-.388v3.92h-1.256a2.665 2.665 0 0 0-2.665 2.665v.389h3.92v1.255a2.665 2.665 0 0 0 2.666 2.665h.388v-3.92h1.255a2.665 2.665 0 0 0 2.665-2.665v-.388z");
}
</style><circle class="cpk0fnbgt"/><path class="rvnxq1bkd"/><path class="k6bnw650l"/>`,
		"fallback": "arcticons:logo-maker-plus",
	});
}

export default Component;
