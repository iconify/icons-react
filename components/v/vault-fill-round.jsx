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
		"content": `<style>.gj17cl5vs {
  fill: currentColor;
  d: path("M7 2h10a5 5 0 0 1 5 5v8a5.01 5.01 0 0 1-4 4.901V21a1 1 0 0 1-2 0v-1H8v1a1 1 0 0 1-2 0v-1.099A5.01 5.01 0 0 1 2 15V7a5 5 0 0 1 5-5m0 9a5 5 0 1 0 10.001-.001A5 5 0 0 0 7 11m7.765-1.167a3.002 3.002 0 0 1-5.529 2.334a3.001 3.001 0 0 1 5.529-2.334M12.01 10H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="gj17cl5vs"/>`,
		"fallback": "coolicons:vault-fill-round",
	});
}

export default Component;
