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
		"content": `<style>.e5wc1i0zm {
  fill: currentColor;
  d: path("M13.73 14.436a6.5 6.5 0 1 1 .707-.707l3.416 3.418a.5.5 0 0 1-.637.764l-.07-.057zM9.5 8.5A.5.5 0 0 0 9 9v3a.5.5 0 0 0 1 0V9a.5.5 0 0 0-.5-.5m0-1a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5");
}
</style><path class="e5wc1i0zm"/>`,
		"fallback": "fluent:search-info-20-filled",
	});
}

export default Component;
