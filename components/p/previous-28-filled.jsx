import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j34bfdbfw {
  fill: currentColor;
  d: path("M4.5 3.75a.75.75 0 0 0-1.5 0v20.5a.75.75 0 0 0 1.5 0zM25 5.254c0-1.816-2.041-2.884-3.533-1.848l-12.504 8.68a2.25 2.25 0 0 0-.013 3.688l12.504 8.81c1.49 1.05 3.546-.015 3.546-1.839z");
}
</style><path class="j34bfdbfw"/>`,
		"fallback": "fluent:previous-28-filled",
	});
}

export default Component;
