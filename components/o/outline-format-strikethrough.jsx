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
		"content": `<style>.uj8dkh-iv {
  fill: currentColor;
  d: path("M10 19h4v-3h-4zM5 4v3h5v3h4V7h5V4zM3 14h18v-2H3z");
}
</style><path class="uj8dkh-iv"/>`,
		"fallback": "ic:outline-format-strikethrough",
	});
}

export default Component;
