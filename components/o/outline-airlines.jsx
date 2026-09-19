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
		"content": `<style>.ubjs4q5ge {
  fill: currentColor;
  d: path("M17.34 18H5.8l8.25-12h5.54zM13 4L2 20h17l3-16zm1.5 5a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 0-5");
}
</style><path class="ubjs4q5ge"/>`,
		"fallback": "ic:outline-airlines",
	});
}

export default Component;
