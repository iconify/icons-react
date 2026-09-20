import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r-ma-0bqc {
  fill: currentColor;
  d: path("M10.122 3.137a2 2 0 0 1 3.203-.52l4.057 4.057a2 2 0 0 1-.52 3.203l-3.458 1.73a1.5 1.5 0 0 0-.722.784l-1.436 3.59a1 1 0 0 1-1.636.336L7 13.707l-3.293 3.292H3v-.707L6.293 13l-2.61-2.61a1 1 0 0 1 .335-1.636l3.59-1.436a1.5 1.5 0 0 0 .785-.721zm2.496.187a1 1 0 0 0-1.601.26l-1.73 3.459A2.5 2.5 0 0 1 7.98 8.246L4.39 9.682l5.927 5.928l1.436-3.59a2.5 2.5 0 0 1 1.204-1.308l3.458-1.73a1 1 0 0 0 .26-1.6z");
}
</style><path class="r-ma-0bqc"/>`,
		"fallback": "fluent:pin-20-regular",
	});
}

export default Component;
