import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.au5kd333n {
  fill: currentColor;
  d: path("M22 8h-8V6h8zM8 21q-2.075 0-3.537-1.463T3 16q0-1.2.525-2.238T5 12V6q0-1.25.875-2.125T8 3t2.125.875T11 6v6q.95.725 1.475 1.763T13 16q0 2.075-1.463 3.538T8 21M7 10h2V6q0-.425-.288-.712T8 5t-.712.288T7 6z");
}
</style><path class="au5kd333n"/>`,
		"fallback": "material-symbols:thermometer-loss",
	});
}

export default Component;
