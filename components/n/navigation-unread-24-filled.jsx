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
		"content": `<style>.h9s5cmxzo {
  fill: currentColor;
  d: path("M19.25 8.5a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5M15.713 7a3.74 3.74 0 0 1-.138-2H3l-.117.007A1 1 0 0 0 3 7zM21 17H3l-.117.007A1 1 0 0 0 3 19h18l.117-.007A1 1 0 0 0 21 17M3 11l18-.002a1 1 0 0 1 .117 1.993l-.117.007L3 13a1 1 0 0 1-.117-1.993z");
}
</style><path class="h9s5cmxzo"/>`,
		"fallback": "fluent:navigation-unread-24-filled",
	});
}

export default Component;
