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
		"content": `<style>.x8-hmvbgs {
  fill: currentColor;
  d: path("M4 22V2h16v20zm2-2h12V4H6zm1-2h10l-3.45-4.5l-2.3 3l-1.55-2zm-1 2V4z");
}
</style><path class="x8-hmvbgs"/>`,
		"fallback": "material-symbols:planner-banner-ad-pt-outline-sharp",
	});
}

export default Component;
