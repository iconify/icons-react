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
		"content": `<style>.yp7dmibhy {
  fill: currentColor;
  d: path("M3 4a1.5 1.5 0 0 1 1.5-1.5h8A1.5 1.5 0 0 1 14 4v5a1.5 1.5 0 0 1-1.5 1.5h-4v-4A2.5 2.5 0 0 0 6 4H3.5q-.26 0-.5.063zm11.5 8.5h-6v-1h6a.5.5 0 0 1 0 1M3 5a1.5 1.5 0 0 0-1.5 1.5v6A1.5 1.5 0 0 0 3 14h3a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 6 5zm1.5 7.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1");
}
</style><path class="yp7dmibhy"/>`,
		"fallback": "fluent:phone-laptop-16-filled",
	});
}

export default Component;
