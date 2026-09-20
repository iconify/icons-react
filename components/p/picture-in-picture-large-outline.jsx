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
		"content": `<style>.su-4bowva {
  fill: currentColor;
  d: path("M3 19v-1h16.385q.23 0 .307-.192q.077-.193.077-.424V5H21v12.385q0 .69-.462 1.153T19.385 19zm2.923-3.384V5.923h11.693v9.693z");
}
</style><path class="su-4bowva"/>`,
		"fallback": "material-symbols-light:picture-in-picture-large-outline",
	});
}

export default Component;
