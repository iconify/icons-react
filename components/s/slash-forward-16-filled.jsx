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
		"content": `<style>.qkh3lvd5y {
  fill: currentColor;
  d: path("M10.267 2.05a.75.75 0 0 1 .434.967l-4 10.5a.75.75 0 0 1-1.402-.534l4-10.5a.75.75 0 0 1 .968-.434");
}
</style><path class="qkh3lvd5y"/>`,
		"fallback": "fluent:slash-forward-16-filled",
	});
}

export default Component;
