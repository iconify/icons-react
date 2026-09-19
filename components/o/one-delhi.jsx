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
		"content": `<style>.aef99yura {
  cx: 9.14px;
  cy: 24px;
  r: 5.64px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.gctd41b5o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.14 29.64h7.078a2.82 2.82 0 0 0 2.82-2.82v-5.64a2.82 2.82 0 1 1 5.64 0v5.64a2.82 2.82 0 1 0 5.64 0v-5.64a2.82 2.82 0 0 1 2.82-2.82h4.993");
}

.tv_klrhmn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M44.5 24h-9.189");
}

.w6dka4v4q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M44.5 29.64h-6.37a2.82 2.82 0 0 1-2.82-2.82v-5.64a2.82 2.82 0 0 1 2.82-2.82h6.37");
}
</style><path class="w6dka4v4q"/><path class="gctd41b5o"/><circle class="aef99yura"/><path class="tv_klrhmn"/>`,
		"fallback": "arcticons:one-delhi",
	});
}

export default Component;
