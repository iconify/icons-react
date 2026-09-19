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
		"content": `<style>.frqs4sfns {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.21 16.71a12.21 12.21 0 0 0-24.42 0v5h24.42v9.58a12.21 12.21 0 0 1-24.42 0v-2.54");
}
</style><path class="frqs4sfns"/>`,
		"fallback": "arcticons:simplisafe",
	});
}

export default Component;
