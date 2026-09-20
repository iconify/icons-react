import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qnwlqv97f {
  fill: currentColor;
  d: path("M28.707 3.293a1 1 0 0 1 0 1.414l-1 1a1 1 0 1 1-1.414-1.414l1-1a1 1 0 0 1 1.414 0m-5 5a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0m-6 6a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0m-6 6a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0m-6 6a1 1 0 0 1 0 1.414l-1 1a1 1 0 0 1-1.414-1.414l1-1a1 1 0 0 1 1.414 0");
}
</style><path class="qnwlqv97f"/>`,
		"fallback": "fluent:line-dashes-32-regular",
	});
}

export default Component;
