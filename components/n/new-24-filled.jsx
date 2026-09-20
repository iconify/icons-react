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
		"content": `<style>.oqbnptb-g {
  fill: currentColor;
  d: path("M18 4a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1M4 18a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M7.707 6.293a1 1 0 0 0-1.414 1.414l7 7a1 1 0 0 0 1.414-1.414z");
}
</style><path class="oqbnptb-g"/>`,
		"fallback": "fluent:new-24-filled",
	});
}

export default Component;
