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
		"content": `<style>.gzbh-2ojm {
  fill: currentColor;
  d: path("M14 10V8a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v6a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 19H5c-.898 0-1.928-.572-2.089-1.521a1.34 1.34 0 0 1 .382-1.186l5-5C9.252 10.335 10.683 10 12 10Zm6-2a1 1 0 0 0-1-1h-2a.997.997 0 0 0-1 1v2h4Z");
}
</style><path class="gzbh-2ojm"/>`,
		"fallback": "coolicons:iron-fill-round",
	});
}

export default Component;
