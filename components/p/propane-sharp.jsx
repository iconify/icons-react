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
		"content": `<style>.x7xqj1bfw {
  fill: currentColor;
  d: path("M9.5 7h5V5.808h-5zM7 19v-2q-2.077 0-3.538-1.457T2 12.005T3.458 8.46T7 7h1.5V4.808h7V7H17q2.083 0 3.542 1.457T22 11.995t-1.458 3.544Q19.083 17 17 17v2h-1v-2H8v2z");
}
</style><path class="x7xqj1bfw"/>`,
		"fallback": "material-symbols-light:propane-sharp",
	});
}

export default Component;
