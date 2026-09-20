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
		"content": `<style>.whgw1jbgp {
  fill: currentColor;
  d: path("M13 12V8h4v4zm-4 3.5c0-.98.402-1.865 1.05-2.5H8v4h1.337A3.5 3.5 0 0 1 9 15.5M7 12V8H3v4zm-4 1h4v4H5.5A2.5 2.5 0 0 1 3 14.5zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13zm-1-4v4H8V3zM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3zm5.5 10a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5zm-4 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5");
}
</style><path class="whgw1jbgp"/>`,
		"fallback": "fluent:table-cell-center-link-20-filled",
	});
}

export default Component;
