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
		"content": `<style>.rh-uq1b4l {
  fill: currentColor;
  d: path("M18 23v-3h-3v-2h3v-3h2v3h3v2h-3v3zm-3.875-11.875Q15 10.25 15 9t-.875-2.125T12 6t-2.125.875T9 9t.875 2.125T12 12t2.125-.875M3 21V3h18v10.35q-.5-.175-1-.262T19 13q-2.5 0-4.25 1.75T13 19q0 .5.088 1t.262 1zm7-11.5v-1h1v1zm1.5 0v-1h1v1zm1.5 0v-1h1v1z");
}
</style><path class="rh-uq1b4l"/>`,
		"fallback": "material-symbols:monitor-weight-gain-sharp",
	});
}

export default Component;
