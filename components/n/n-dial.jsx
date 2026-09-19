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
		"content": `<style>.fob-pnjez {
  cx: 35.824px;
  cy: 35.204px;
  r: 6.676px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ftkd719-k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 12.408c0 2.968 0 5.936 1.38 9.81c1.38 3.873 4.139 8.652 7.643 12.268s7.753 6.07 11.428 7.108c3.675 1.039 6.774.662 9.874.286");
}

.tcnrrpyzi {
  cx: 12.176px;
  cy: 12.408px;
  r: 6.676px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="fob-pnjez"/><circle class="tcnrrpyzi"/><path class="ftkd719-k"/>`,
		"fallback": "arcticons:n-dial",
	});
}

export default Component;
