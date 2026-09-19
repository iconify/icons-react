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
		"content": `<style>.gc636bbnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.86 26.77h9.8m-3.28 2.85v-2.85m-10.11-9.09h-6.22a9.56 9.56 0 0 0 0 19.11h21.2a8.25 8.25 0 0 0 0-16.5h-.2a10.81 10.81 0 0 0-20.57-2.6");
}

.jmod4gbie {
  cx: 20.27px;
  cy: 26.77px;
  r: 3.59px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="jmod4gbie"/><path class="gc636bbnc"/>`,
		"fallback": "arcticons:nebulo",
	});
}

export default Component;
