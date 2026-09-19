import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qq7u-ufdu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.993 9.009c-7.815 0-6.885 33.491-19.458 33.491S1.83 5.5 9.17 5.5s13.078 22.966 23.285 22.966S44.894 9.01 38.993 9.01z");
}
</style><path class="qq7u-ufdu"/>`,
		"fallback": "arcticons:moviebox-alt",
	});
}

export default Component;
