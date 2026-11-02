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
		"content": `<style>.lpzmsjlui {
  fill: currentColor;
  d: path("M15.677 9H8.323l1.749-4.371A1 1 0 0 1 11 4h2c.409 0 .777.249.928.629Zm2 5H6.323l1.2-3h8.954ZM3 21a1 1 0 0 1 0-2h1.323l1.2-3h12.954l1.2 3H21a1 1 0 0 1 0 2Z");
}
</style><path class="lpzmsjlui"/>`,
		"fallback": "coolicons:traffic-cone-fill-sharp",
	});
}

export default Component;
