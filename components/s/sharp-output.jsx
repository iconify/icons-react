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
		"content": `<style>.n6ov7mvjf {
  fill: currentColor;
  d: path("M19 19H5V5h14v2h2V3H3v18h18v-4h-2z");
}

.r_-fg2ogt {
  fill: currentColor;
  d: path("m17 17l5-5l-5-5l-1.41 1.41L18.17 11H9v2h9.17l-2.58 2.59z");
}
</style><path class="r_-fg2ogt"/><path class="n6ov7mvjf"/>`,
		"fallback": "ic:sharp-output",
	});
}

export default Component;
