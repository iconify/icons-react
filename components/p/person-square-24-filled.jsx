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
		"content": `<style>.qdlrdfimg {
  fill: currentColor;
  d: path("M3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25M15.5 12a1.5 1.5 0 0 1 1.5 1.5v.5c0 1.971-1.86 4-5 4s-5-2.029-5-4v-.5A1.5 1.5 0 0 1 8.5 12zM12 5.5a2.75 2.75 0 1 1 0 5.5a2.75 2.75 0 0 1 0-5.5");
}
</style><path class="qdlrdfimg"/>`,
		"fallback": "fluent:person-square-24-filled",
	});
}

export default Component;
