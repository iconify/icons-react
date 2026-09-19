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
		"content": `<style>.zyt6voa4n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.285 16.982a4.859 4.859 0 1 1 4.208-7.288l13.715 23.755a4.859 4.859 0 1 1-8.416 0L33.507 9.693a4.859 4.859 0 1 1 4.208 7.288z");
}
</style><path class="zyt6voa4n"/>`,
		"fallback": "arcticons:tribit",
	});
}

export default Component;
