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
		"content": `<style>.dqhxnerpl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M37.652 20v8");
}

.f_4t88xfh {
  width: 5.3px;
  height: 8px;
  x: 10.348px;
  y: 20px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.65px;
  ry: 2.65px;
}

.pyiyg_b_b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.884 28v-3.3a2 2 0 1 0-4 0m0 3.3v-5.3M30.208 20v5.35a2.65 2.65 0 1 0 5.3 0V20m-7.701 6.99a2 2 0 0 1-3.738-.99v-1.3a2 2 0 1 1 4 0v.65h-4");
}
</style><path class="dqhxnerpl"/><path class="pyiyg_b_b"/><rect class="f_4t88xfh"/>`,
		"fallback": "arcticons:one-ui-icon-pack",
	});
}

export default Component;
