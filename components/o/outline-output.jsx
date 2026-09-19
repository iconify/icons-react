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
		"content": `<style>.b01xvhb1i {
  fill: currentColor;
  d: path("M19 19H5V5h14v2h2V5a2 2 0 0 0-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-2h-2z");
}

.r_-fg2ogt {
  fill: currentColor;
  d: path("m17 17l5-5l-5-5l-1.41 1.41L18.17 11H9v2h9.17l-2.58 2.59z");
}
</style><path class="r_-fg2ogt"/><path class="b01xvhb1i"/>`,
		"fallback": "ic:outline-output",
	});
}

export default Component;
