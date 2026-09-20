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
		"content": `<style>.w0u_1zbdc {
  fill: currentColor;
  d: path("M17.288 10.713Q17 10.425 17 10t.288-.712T18 9t.713.288T19 10t-.288.713T18 11t-.712-.288m0-3Q17 7.426 17 7V4q0-.425.288-.712T18 3t.713.288T19 4v3q0 .425-.288.713T18 8t-.712-.288M8 21q-2.075 0-3.537-1.463T3 16q0-1.2.525-2.238T5 12V6q0-1.25.875-2.125T8 3t2.125.875T11 6v6q.95.725 1.475 1.763T13 16q0 2.075-1.463 3.538T8 21M7 10h2V6q0-.425-.288-.712T8 5t-.712.288T7 6z");
}
</style><path class="w0u_1zbdc"/>`,
		"fallback": "material-symbols:thermometer-alert-rounded",
	});
}

export default Component;
