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
		"content": `<style>.erkqwpm1w {
  fill: currentColor;
  d: path("M7 2v11h3v9l7-12h-4l3-8z");
}
</style><path class="erkqwpm1w"/>`,
		"fallback": "ic:outline-flash-on",
	});
}

export default Component;
