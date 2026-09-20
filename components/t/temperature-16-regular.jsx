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
		"content": `<style>.e2z9ocwub {
  fill: currentColor;
  d: path("M5 3.5a2.5 2.5 0 1 1 5 0v5.45a3.5 3.5 0 1 1-5 0zM7.5 2A1.5 1.5 0 0 0 6 3.5v5.887l-.166.15a2.5 2.5 0 1 0 3.333 0L9 9.386V3.5A1.5 1.5 0 0 0 7.5 2M8 6a.5.5 0 0 0-1 0v4.085a1.5 1.5 0 1 0 1 0z");
}
</style><path class="e2z9ocwub"/>`,
		"fallback": "fluent:temperature-16-regular",
	});
}

export default Component;
