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
		"content": `<style>.e_c0c040g {
  fill: currentColor;
  d: path("M13 17h1.5a2.5 2.5 0 0 0 2.5-2.5V13h-4zm0-5V8h4v4zm-5 1h4v4H8zm-1-1V8H3v4zm-4 1h4v4H5.5A2.5 2.5 0 0 1 3 14.5zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13zm-1-4v4H8V3zM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3z");
}
</style><path class="e_c0c040g"/>`,
		"fallback": "fluent:table-cell-center-20-filled",
	});
}

export default Component;
