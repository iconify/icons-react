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
		"content": `<style>.wy-84n0ey {
  fill: currentColor;
  d: path("M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0m3 0a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 0 3h-9A1.5 1.5 0 0 1 6 12");
}
</style><path class="wy-84n0ey"/>`,
		"fallback": "fluent:presence-dnd-24-regular",
	});
}

export default Component;
