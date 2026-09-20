import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rl4n-dboe {
  fill: currentColor;
  d: path("M13 2a1 1 0 0 0-1 1v4H8a1 1 0 0 0-1 1v4H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12a3 3 0 0 0 3-3V3a1 1 0 0 0-1-1z");
}
</style><path class="rl4n-dboe"/>`,
		"fallback": "fluent:step-20-filled",
	});
}

export default Component;
