import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b11cxkb2r {
  fill: currentColor;
  d: path("M8 21h3.25V3H8zM6.5 3h-.25A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h.25zM16 21h-3.25V3H16zm1.5 0h.25A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3h-.25z");
}
</style><path class="b11cxkb2r"/>`,
		"fallback": "fluent:layout-column-four-24-filled",
	});
}

export default Component;
