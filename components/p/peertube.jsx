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
		"content": `<style>.gcyc2ib3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8.83 4.5l16.89 9.75L42.6 24l-16.88 9.75L8.83 43.5V24l8.36 4.83l8.42 4.87V14.27l-8.42 4.87L8.83 24z");
}
</style><path class="gcyc2ib3j"/>`,
		"fallback": "arcticons:peertube",
	});
}

export default Component;
