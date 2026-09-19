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
		"content": `<style>.d39t-ac2g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m44.385 20.811l-2.153-6.626l-14.966 4.863V3.312H20.3v15.736L5.333 14.185L3.18 20.811l14.966 4.863l-9.25 12.73l5.637 4.096l9.25-12.73l9.25 12.73l5.636-4.095l-9.25-12.73z");
}
</style><path class="d39t-ac2g"/>`,
		"fallback": "arcticons:partnerkaart",
	});
}

export default Component;
