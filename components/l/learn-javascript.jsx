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
		"content": `<style>.ebp7y0bnn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.599 6.421V41.58L5.5 37.885m37-31.075H27.368v18.915l12.553-1.633l-1.032 14.014l-12.99 3.473");
}
</style><path class="ebp7y0bnn"/>`,
		"fallback": "arcticons:learn-javascript",
	});
}

export default Component;
