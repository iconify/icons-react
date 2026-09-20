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
		"content": `<style>.z4rjrbc3i {
  fill: currentColor;
  d: path("M4 2.75C4 1.784 4.784 1 5.75 1h4.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 10.25 15h-4.5A1.75 1.75 0 0 1 4 13.25zM7 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z");
}
</style><path class="z4rjrbc3i"/>`,
		"fallback": "fluent:phone-16-filled",
	});
}

export default Component;
