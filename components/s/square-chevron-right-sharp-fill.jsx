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
		"content": `<style>.geki3y6gf {
  fill: currentColor;
  d: path("M3 2L21 2C21.5523 2 22 2.4477 22 3L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2ZM9 8.4142L12.5858 12L9 15.5858L10.4142 17L14.7071 12.7071C15.0976 12.3166 15.0976 11.6834 14.7071 11.2929L10.4142 7L9 8.4142Z");
}
</style><path class="geki3y6gf"/>`,
		"fallback": "keyline-icons:square-chevron-right-sharp-fill",
	});
}

export default Component;
