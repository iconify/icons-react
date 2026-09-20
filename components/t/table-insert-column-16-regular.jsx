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
		"content": `<style>.g2pa121ot {
  fill: currentColor;
  d: path("M3 2.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0zm11 0a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0zM6.5 2A1.5 1.5 0 0 0 5 3.5v9A1.5 1.5 0 0 0 6.5 14h3a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 9.5 2zM6 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V5H6zM6 6h4v4H6zm0 5h4v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z");
}
</style><path class="g2pa121ot"/>`,
		"fallback": "fluent:table-insert-column-16-regular",
	});
}

export default Component;
