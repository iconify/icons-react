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
		"content": `<style>.o96vdd0lc {
  fill: currentColor;
  d: path("M19 13V4h3v9zM6.7 21L1 15.225l2.125-2.175l2.875.6V5.5q0-1.05.725-1.775T8.5 3t1.775.725T11 5.5V10h.85l5.375 2.375L15.75 21zm.85-2h6.525L15 13.55l-4.25-1.875H9V5.5q0-.225-.137-.363T8.5 5t-.363.138T8 5.5v10.6l-4.175-.875zm0 0h6.525z");
}
</style><path class="o96vdd0lc"/>`,
		"fallback": "material-symbols:nest-wake-on-press-outline-sharp",
	});
}

export default Component;
