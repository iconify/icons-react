import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c59244bhz {
  fill: currentColor;
  d: path("M134 160v72a6 6 0 0 1-12 0v-72a6 6 0 0 1 12 0m74-62h-65.52l45.76-45.76a6 6 0 0 0-8.48-8.48L134 89.52V24a6 6 0 0 0-12 0v65.52L76.24 43.76a6 6 0 0 0-8.48 8.48L113.52 98H48a6 6 0 0 0 0 12h65.52l-45.76 45.76a6 6 0 1 0 8.48 8.48L128 112.48l51.76 51.76a6 6 0 0 0 8.48-8.48L142.48 110H208a6 6 0 0 0 0-12");
}
</style><path class="c59244bhz"/>`,
		"fallback": "ph:linktree-logo-light",
	});
}

export default Component;
