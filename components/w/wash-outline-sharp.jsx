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
		"content": `<style>.p844jnc8l {
  fill: currentColor;
  d: path("M15.763 7.238Q15 6.475 15 5.5q0-.875.575-1.937T17.5 1q1.35 1.5 1.925 2.563T20 5.5q0 .975-.763 1.738T17.5 8t-1.737-.763M19 22H2V10.975l9.625-6.25L13.25 6.35L11.3 9.5H20v2H7.7l1.925-3.1L4 12.05V20h15zm-7-7v-2h10v2zm0 3.5v-2h9v2zm-4-3.05");
}
</style><path class="p844jnc8l"/>`,
		"fallback": "material-symbols:wash-outline-sharp",
	});
}

export default Component;
