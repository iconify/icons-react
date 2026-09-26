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
		"content": `<style>.r2a39z7-i {
  fill: currentColor;
  d: path("M3 2L21 2C21.5523 2 22 2.4477 22 3L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2ZM8.4142 15L12 11.4142L15.5858 15L17 13.5858L12.7071 9.2929C12.3166 8.9024 11.6834 8.9024 11.2929 9.2929L7 13.5858L8.4142 15Z");
}
</style><path class="r2a39z7-i"/>`,
		"fallback": "keyline-icons:square-chevron-up-sharp-fill",
	});
}

export default Component;
