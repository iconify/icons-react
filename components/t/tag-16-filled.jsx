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
		"content": `<style>.smcw34b3m {
  fill: currentColor;
  d: path("M2.587 7.314a1.99 1.99 0 0 0 0 2.822l3.296 3.28a2.013 2.013 0 0 0 2.836 0l4.67-4.647a2 2 0 0 0 .587-1.397L14 4.01A2 2 0 0 0 11.987 2l-3.25.014a2 2 0 0 0-1.41.584zM11 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2");
}
</style><path class="smcw34b3m"/>`,
		"fallback": "fluent:tag-16-filled",
	});
}

export default Component;
