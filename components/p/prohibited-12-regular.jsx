import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b8s8cmmrd {
  fill: currentColor;
  d: path("M6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1M2 6a4 4 0 0 1 6.453-3.16L2.84 8.453A4 4 0 0 1 2 6m1.547 3.16L9.16 3.547A4 4 0 0 1 3.547 9.16");
}
</style><path class="b8s8cmmrd"/>`,
		"fallback": "fluent:prohibited-12-regular",
	});
}

export default Component;
