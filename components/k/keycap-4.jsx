import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.if_qk_b0g {
  fill: currentColor;
  d: path("M52 2H12C6.479 2 2 6.477 2 12v40c0 5.523 4.479 10 10 10h40c5.523 0 10-4.477 10-10V12c0-5.523-4.477-10-10-10m5 43.666A8.33 8.33 0 0 1 48.668 54H15.334A8.334 8.334 0 0 1 7 45.666V12.334A8.334 8.334 0 0 1 15.334 4h33.334A8.33 8.33 0 0 1 57 12.334z");
}

.rla-8yyah {
  fill: currentColor;
  d: path("M33.662 45v-6.414H20v-5.348L34.482 13h5.373v20.217H44v5.369h-4.145V45zm0-11.783V22.326l-7.674 10.891z");
}
</style><path class="if_qk_b0g"/><path class="rla-8yyah"/>`,
		"fallback": "emojione-monotone:keycap-4",
	});
}

export default Component;
