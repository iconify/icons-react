import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m1215f0mu {
  fill: currentColor;
  d: path("M204 208a4 4 0 0 1-4 4h-72a84 84 0 0 1 0-168h72a4 4 0 0 1 0 8h-72a76 76 0 0 0 0 152h72a4 4 0 0 1 4 4");
}
</style><path class="m1215f0mu"/>`,
		"fallback": "ph:subset-proper-of-thin",
	});
}

export default Component;
