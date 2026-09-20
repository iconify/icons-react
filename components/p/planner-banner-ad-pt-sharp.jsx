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
		"content": `<style>.avehd74dq {
  fill: currentColor;
  d: path("M5 21V3h14v18zm2.73-3.5h8.693l-2.757-3.654l-2.454 3.077l-1.589-1.884z");
}
</style><path class="avehd74dq"/>`,
		"fallback": "material-symbols-light:planner-banner-ad-pt-sharp",
	});
}

export default Component;
