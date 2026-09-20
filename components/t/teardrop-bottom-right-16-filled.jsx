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
		"content": `<style>.zmm0wsb8k {
  fill: currentColor;
  d: path("M1 8a7 7 0 0 1 14 0v5.25A1.75 1.75 0 0 1 13.25 15H8a7 7 0 0 1-7-7");
}
</style><path class="zmm0wsb8k"/>`,
		"fallback": "fluent:teardrop-bottom-right-16-filled",
	});
}

export default Component;
