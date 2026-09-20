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
		"content": `<style>.xshl30f4k {
  fill: currentColor;
  d: path("M18 20h-6.325q.325-.45.563-.95T12.65 18H16V6H4v3.275q-.55.15-1.05.388t-.95.562V4h16v6.5l4-4v11l-4-4zm-15.537-.462Q1 18.075 1 16t1.463-3.537T6 11t3.538 1.463T11 16t-1.463 3.538T6 21t-3.537-1.462M6 19q.2 0 .35-.15t.15-.35t-.15-.35T6 18t-.35.15t-.15.35t.15.35T6 19m-.5-2h1v-4h-1z");
}
</style><path class="xshl30f4k"/>`,
		"fallback": "material-symbols:videocam-alert-outline-sharp",
	});
}

export default Component;
