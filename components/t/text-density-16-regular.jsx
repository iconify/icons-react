import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n08xh4b7d {
  fill: currentColor;
  d: path("M8.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5M7 3H2.5a.5.5 0 0 0 0 1H7zm0 3H2.5a.5.5 0 0 0 0 1H7zm0 3H2.5a.5.5 0 0 0 0 1H7zm0 3H2.5a.5.5 0 0 0 0 1H7zm5.5 0H10v-1h2.5a.5.5 0 1 0 0-1H10V9h2.5a1.5 1.5 0 1 1 0 3m0-5H10V6h2.5a.5.5 0 1 0 0-1H10V4h2.5a1.5 1.5 0 1 1 0 3");
}
</style><path class="n08xh4b7d"/>`,
		"fallback": "fluent:text-density-16-regular",
	});
}

export default Component;
