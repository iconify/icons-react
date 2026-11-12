import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.poa0ze7aa {
  fill: currentColor;
  d: path("m16.321 14.906l5.386 5.387a.999.999 0 1 1-1.414 1.414l-5.387-5.386A8.002 8.002 0 0 1 4.343 4.343a8 8 0 0 1 11.978 10.563M6.293 11.293a.999.999 0 1 0 1.414 1.414l1-1a.414.414 0 0 1 .586 0l1 1a1 1 0 0 0 1.601-.26l2-4a1 1 0 1 0-1.788-.894l-1.38 2.759l-.019-.019a2.414 2.414 0 0 0-3.414 0Z");
}
</style><path class="poa0ze7aa"/>`,
		"fallback": "coolicons:search-chart-fill",
	});
}

export default Component;
