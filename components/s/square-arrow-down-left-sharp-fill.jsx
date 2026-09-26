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
		"content": `<style>.y9ait8b3g {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3 2L21 2C21.5523 2 22 2.4477 22 3L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2ZM14.5858 8.0001L10 12.5859L10 8L8 8L8 15C8 15.5523 8.4477 16 9 16L16 16L16 14L11.4141 14L15.9998 9.4141L14.5858 8.0001Z");
}
</style><path clip-rule="evenodd" class="y9ait8b3g"/>`,
		"fallback": "keyline-icons:square-arrow-down-left-sharp-fill",
	});
}

export default Component;
