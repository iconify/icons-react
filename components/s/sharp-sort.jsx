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
		"content": `<style>.yzsm6qbis {
  fill: currentColor;
  d: path("M3 18h6v-2H3zM3 6v2h18V6zm0 7h12v-2H3z");
}
</style><path class="yzsm6qbis"/>`,
		"fallback": "ic:sharp-sort",
	});
}

export default Component;
