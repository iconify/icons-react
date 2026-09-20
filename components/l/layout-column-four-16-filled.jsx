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
		"content": `<style>.hb3jdcbeb {
  fill: currentColor;
  d: path("M8.5 14H11V2H8.5zm-1-12H5v12h2.5zm6.5 9.5a2.5 2.5 0 0 1-2 2.45V2.05a2.5 2.5 0 0 1 2 2.45zM4 2.05A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45z");
}
</style><path class="hb3jdcbeb"/>`,
		"fallback": "fluent:layout-column-four-16-filled",
	});
}

export default Component;
