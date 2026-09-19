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
		"content": `<style>.xlu1wccsn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10 34.57A5.56 5.56 0 1 1 15.6 29a5.55 5.55 0 0 1-5.6 5.57m33.39-12.32H21.07v-8.84h22.42Z");
}
</style><path class="xlu1wccsn"/>`,
		"fallback": "arcticons:morse",
	});
}

export default Component;
