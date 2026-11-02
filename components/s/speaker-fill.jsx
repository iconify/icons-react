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
		"content": `<style>.puna2gbcw {
  fill: currentColor;
  d: path("M7 2h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m5.01 4H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M8 14a4 4 0 1 0 8 0a4 4 0 0 0-8 0");
}
</style><path class="puna2gbcw"/>`,
		"fallback": "coolicons:speaker-fill",
	});
}

export default Component;
