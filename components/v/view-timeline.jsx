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
		"content": `<style>.dmghaiv-r {
  fill: currentColor;
  d: path("M6.539 16.5h4.923v-1H6.539zm3-4h4.923v-1H9.539zm3-4h4.923v-1h-4.923zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z");
}
</style><path class="dmghaiv-r"/>`,
		"fallback": "material-symbols-light:view-timeline",
	});
}

export default Component;
