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
		"content": `<style>.d3_us29fn {
  fill: currentColor;
  d: path("M1 5.5A4.5 4.5 0 0 1 9.973 5H8.5A3.5 3.5 0 0 0 5 8.5v1.473A4.5 4.5 0 0 1 1 5.5m7.5.5A2.5 2.5 0 0 0 6 8.5v4A2.5 2.5 0 0 0 8.5 15h4a2.5 2.5 0 0 0 2.5-2.5v-4A2.5 2.5 0 0 0 12.5 6z");
}
</style><path class="d3_us29fn"/>`,
		"fallback": "fluent:shapes-16-filled",
	});
}

export default Component;
