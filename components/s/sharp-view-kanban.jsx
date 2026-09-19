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
		"content": `<style>.phy25iykj {
  fill: currentColor;
  d: path("M21 3H3v18h18zM9 17H7V7h2zm4-5h-2V7h2zm4 3h-2V7h2z");
}
</style><path class="phy25iykj"/>`,
		"fallback": "ic:sharp-view-kanban",
	});
}

export default Component;
