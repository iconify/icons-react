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
		"content": `<style>.e094-ef7v {
  fill: currentColor;
  d: path("M6.125 12.15q1.175-.575 2.438-.862T11.125 11q.75 0 1.488.1t1.462.3q1.25.35 1.913.475T17.4 12h.475l.875-8H5.25zM5.2 22L3 2h18l-2.2 20z");
}
</style><path class="e094-ef7v"/>`,
		"fallback": "material-symbols:water-medium-sharp",
	});
}

export default Component;
