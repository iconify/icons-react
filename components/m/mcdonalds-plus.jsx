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
		"content": `<style>.cy-d7_i0l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 42.5h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4");
}

.k9bd55jdc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.5 35.7c0-5.78-1.51-23.4-6.31-23.4S24 25.59 24 33.88c0-8.29-1.4-21.58-6.19-21.58S11.5 29.92 11.5 35.7m25.79-20.9v-5m-2.5 2.5h5");
}
</style><path class="cy-d7_i0l"/><path class="k9bd55jdc"/>`,
		"fallback": "arcticons:mcdonalds-plus",
	});
}

export default Component;
