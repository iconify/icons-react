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
		"content": `<style>.r3daq2qbd {
  fill: currentColor;
  d: path("M19 9h-4V3H9v6H5l7 7zm-8 2V5h2v6h1.17L12 13.17L9.83 11zm-6 7h14v2H5z");
}
</style><path class="r3daq2qbd"/>`,
		"fallback": "ic:outline-download",
	});
}

export default Component;
