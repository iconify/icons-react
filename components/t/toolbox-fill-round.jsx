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
		"content": `<style>.jc-xamhui {
  fill: currentColor;
  d: path("M8 7V6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h1a5 5 0 0 1 5 5v1h-5v2h5v1a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 21H7a5 5 0 0 1-5-5v-1h5v-2H2v-1a5 5 0 0 1 5-5Zm6-1a.997.997 0 0 0-1-1h-2a.997.997 0 0 0-1 1v1h4Zm-5 9h6v-2H9Z");
}
</style><path class="jc-xamhui"/>`,
		"fallback": "coolicons:toolbox-fill-round",
	});
}

export default Component;
