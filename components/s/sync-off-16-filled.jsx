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
		"content": `<style>.i_njwjtlf {
  fill: currentColor;
  d: path("M14 8A6 6 0 0 1 2 8h3.877l-.847 2.33a.5.5 0 0 0 .94.34l2-5.5a.5.5 0 1 0-.94-.34L6.24 7H2.084a6.002 6.002 0 0 1 11.834 0h-3.612l.665-1.83a.5.5 0 1 0-.94-.34l-2 5.5a.5.5 0 0 0 .94.34L9.941 8z");
}
</style><path class="i_njwjtlf"/>`,
		"fallback": "fluent:sync-off-16-filled",
	});
}

export default Component;
