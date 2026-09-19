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
		"content": `<style>.lk1t2tbst {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.5 24.09A21.5 21.5 0 1 0 24 2.59m0 21.5L8.8 8.89");
}
</style><path class="lk1t2tbst"/>`,
		"fallback": "arcticons:trigger",
	});
}

export default Component;
