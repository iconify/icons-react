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
		"content": `<style>.cgfxe3bsy {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M22 3L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2L21 2C21.5523 2 22 2.4477 22 3ZM13 17L17 17L17 15L13 15L13 17ZM8 13L17 13L17 11L8 11L8 13ZM7 9L14 9L14 7L7 7L7 9Z");
}
</style><path clip-rule="evenodd" class="cgfxe3bsy"/>`,
		"fallback": "keyline-icons:square-align-offset-top-sharp-fill",
	});
}

export default Component;
