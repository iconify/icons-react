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
		"content": `<style>.z49u-6bah {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V5H5zm0 0V5zm3.962-3.962h1V9.962h2.173L14 15.038h1.077l2.27-6.077h-1.155L14.54 13.52l-1.616-4.558h-6.5v1h2.539z");
}
</style><path class="z49u-6bah"/>`,
		"fallback": "material-symbols-light:tv-guide-outline-sharp",
	});
}

export default Component;
