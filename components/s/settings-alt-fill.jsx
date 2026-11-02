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
		"content": `<style>.m0jr7lbdu {
  fill: currentColor;
  d: path("m19.342 18.447l-6 3a3 3 0 0 1-2.684 0l-6-3A3 3 0 0 1 3 15.764V8.236a3 3 0 0 1 1.658-2.683l6-3a3 3 0 0 1 2.684 0l6 3A3 3 0 0 1 21 8.236v7.528a3 3 0 0 1-1.658 2.683M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}
</style><path class="m0jr7lbdu"/>`,
		"fallback": "coolicons:settings-alt-fill",
	});
}

export default Component;
