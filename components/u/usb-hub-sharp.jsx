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
		"content": `<style>.p104u5b_a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 13h18v8H3ZM9 3h6v4H9Zm3 4v6m-5 4h2m6 0h2");
}
</style><path class="p104u5b_a"/>`,
		"fallback": "coolicons:usb-hub-sharp",
	});
}

export default Component;
