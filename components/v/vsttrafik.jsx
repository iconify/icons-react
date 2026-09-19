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
		"content": `<style>.ane0-qb0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.5 4.5h-18a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2v-26Z");
}

.h3jdxbcrz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.125 29a2.71 2.71 0 0 0-2.8-2.7a2.817 2.817 0 0 0-2.5 2.8v2.5a2.7 2.7 0 1 0 5.4 0h-2.7m-2.7-15.8h5.3m-2.6 8v-8m6.35 5.3a2.65 2.65 0 1 0 5.3 0v-2.7a2.69 2.69 0 0 0-2.7-2.7a2.606 2.606 0 0 0-2.6 2.7Zm0 10.5a2.65 2.65 0 1 0 5.3 0v-2.7a2.69 2.69 0 0 0-2.7-2.7a2.606 2.606 0 0 0-2.6 2.7Z");
}
</style><path class="ane0-qb0j"/><path class="h3jdxbcrz"/>`,
		"fallback": "arcticons:vsttrafik",
	});
}

export default Component;
