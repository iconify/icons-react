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
		"content": `<style>.ni9_m913w {
  fill: currentColor;
  d: path("M1 4.75C1 3.784 1.784 3 2.75 3h10.5c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 13.25 13H2.75A1.75 1.75 0 0 1 1 11.25zM6.5 10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z");
}
</style><path class="ni9_m913w"/>`,
		"fallback": "fluent:tablet-16-filled",
	});
}

export default Component;
