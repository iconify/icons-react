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
		"content": `<style>.y6xv1p33t {
  fill: currentColor;
  d: path("M10 16q2.5 0 4.25-1.75T16 10t-1.75-4.25T10 4T5.75 5.75T4 10t1.75 4.25T10 16m-1-3V6h2v7zm-3.5 0V8h2v5zm7 0V9h2v4zm8.1 9l-5.675-5.675q-1.025.8-2.275 1.238T10 18q-3.35 0-5.675-2.325T2 10t2.325-5.675T10 2t5.675 2.325T18 10q0 1.4-.437 2.65t-1.238 2.275L22 20.6z");
}
</style><path class="y6xv1p33t"/>`,
		"fallback": "material-symbols:search-insights-outline-sharp",
	});
}

export default Component;
