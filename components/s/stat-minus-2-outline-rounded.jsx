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
		"content": `<style>.gl4u2dd9k {
  fill: currentColor;
  d: path("m12 16.175l3.9-3.875q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-3.875 3.875q-.575.575-1.425.575t-1.425-.575L6.7 13.7q-.275-.275-.288-.687T6.7 12.3q.275-.275.7-.275t.7.275zm0-6L15.9 6.3q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7l-3.875 3.875q-.575.575-1.425.575t-1.425-.575L6.7 7.7q-.275-.275-.288-.687T6.7 6.3q.275-.275.7-.275t.7.275z");
}
</style><path class="gl4u2dd9k"/>`,
		"fallback": "material-symbols:stat-minus-2-outline-rounded",
	});
}

export default Component;
