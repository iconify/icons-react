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
		"content": `<style>.bj2hqhk-e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.346 36.808v-2.846h2.846v-2.847h2.847v-2.846h2.846v-2.846h2.846v-2.846h2.846v-2.846h2.846v-2.846h2.846v-2.846H16.885v-2.847h-2.846V8.346h2.846V5.5h14.23v2.846h8.539v8.539H42.5v14.23h-2.846v2.847h-2.846v-2.847h-2.846V19.731h-2.847v2.846h-2.846v2.846h-2.846v2.846h-2.846v2.846h-2.846v2.847h-2.846v2.846h-2.846v2.846h-2.847V42.5H5.5v-5.692z");
}

.i5ghz7bfr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.962 8.346v5.693h5.692m-5.692 5.692v-2.846h-2.847v-2.846h-2.846");
}
</style><path class="bj2hqhk-e"/><path class="i5ghz7bfr"/>`,
		"fallback": "arcticons:minecraft-pickaxe",
	});
}

export default Component;
