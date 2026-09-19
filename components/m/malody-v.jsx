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
		"content": `<style>.ye1rqwbti {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.328 36.537V9.907m1.354-3.001L24 27.626l15.318-20.72M13.566 20.579l.222 20.515L5.5 35.248l.074-28.342h6.216L24 22.15L36.21 6.906h6.216l.074 28.342l-8.288 5.846l.222-20.515m6.238 15.958V9.907m1.754-3.001L24 38.43L5.574 6.906");
}
</style><path class="ye1rqwbti"/>`,
		"fallback": "arcticons:malody-v",
	});
}

export default Component;
