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
		"content": `<style>.uimgwkbpu {
  fill: currentColor;
  d: path("M4 22V2h16v20zm3-4h10l-3.45-4.5l-2.3 3l-1.55-2z");
}
</style><path class="uimgwkbpu"/>`,
		"fallback": "material-symbols:planner-banner-ad-pt-sharp",
	});
}

export default Component;
