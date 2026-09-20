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
		"content": `<style>.qzbi0lb_g {
  fill: currentColor;
  d: path("M4 19V5h5.116v14zm7.5 2V3h1v2H20v14h-7.5v2z");
}
</style><path class="qzbi0lb_g"/>`,
		"fallback": "material-symbols-light:split-scene-right-sharp",
	});
}

export default Component;
