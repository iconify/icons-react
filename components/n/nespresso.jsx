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
		"content": `<style>.agmh66bwb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.663 15.847V32.54c-3.64-5.593-8.485-12.276-14.2-18.064c-2.713-2.747-6.072-4.07-9.037-4.07a13.6 13.6 0 0 0-3.857.573");
}

.h7nrtjboc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.476 32.153V15.46c3.64 5.593 8.485 12.276 14.2 18.064c2.713 2.747 6.072 4.07 9.036 4.07a13.6 13.6 0 0 0 3.857-.572");
}
</style><path class="h7nrtjboc"/><path class="agmh66bwb"/>`,
		"fallback": "arcticons:nespresso",
	});
}

export default Component;
