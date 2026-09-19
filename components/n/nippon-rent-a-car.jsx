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
		"content": `<style>.a30bh_fyj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.5 10.5h26l-13 27h-26zm19 0l-13 27");
}
</style><path class="a30bh_fyj"/>`,
		"fallback": "arcticons:nippon-rent-a-car",
	});
}

export default Component;
