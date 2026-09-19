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
		"content": `<style>.c1o0jlbvv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22 35.187v-5.312h-5.312");
}

.g_1vj4b-t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.375 28.875c0 6.413 10.245 9.882 12.625 1");
}

.gienq2bsq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.625 4.5v24.375C38.625 36.952 32.077 43.5 24 43.5S9.375 36.952 9.375 28.875V4.5z");
}
</style><path class="gienq2bsq"/><path class="c1o0jlbvv"/><path class="g_1vj4b-t"/>`,
		"fallback": "arcticons:upgrad",
	});
}

export default Component;
