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
		"content": `<style>.h4yeqnlbz {
  fill: currentColor;
  d: path("M17.93 3.362c.31-.81-.484-1.604-1.293-1.293L2.64 7.453c-.906.348-.834 1.653.105 1.9l5.973 1.572a.5.5 0 0 1 .356.356l1.572 5.974c.247.938 1.552 1.01 1.9.104zm-.934-.36L11.613 17l-1.572-5.973a1.5 1.5 0 0 0-1.069-1.069L3 8.386z");
}
</style><path class="h4yeqnlbz"/>`,
		"fallback": "fluent:location-arrow-20-regular",
	});
}

export default Component;
