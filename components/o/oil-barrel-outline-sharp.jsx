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
		"content": `<style>.h2_uit45r {
  fill: currentColor;
  d: path("M3 21v-2h2v-6H3v-2h2V5H3V3h18v2h-2v6h2v2h-2v6h2v2zm4-2h10v-6h-1v-2h1V5H7v6h1v2H7zm7.125-3.863Q15 14.276 15 13.05q0-.975-.562-1.675T12 8.5q-1.875 2.15-2.437 2.863T9 13.05q0 1.225.875 2.088T12 16t2.125-.862M7 19V5z");
}
</style><path class="h2_uit45r"/>`,
		"fallback": "material-symbols:oil-barrel-outline-sharp",
	});
}

export default Component;
