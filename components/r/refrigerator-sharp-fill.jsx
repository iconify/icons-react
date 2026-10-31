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
		"content": `<style>.uworiabip {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 1L19 1C19.5523 1 20 1.4477 20 2L20 22C20 22.5523 19.5523 23 19 23L5 23C4.4477 23 4 22.5523 4 22L4 2C4 1.4477 4.4477 1 5 1ZM6 10L6 12L18 12L18 10L6 10ZM10 5L8 5L8 8L10 8L10 5ZM10 14L8 14L8 19L10 19L10 14Z");
}
</style><path clip-rule="evenodd" class="uworiabip"/>`,
		"fallback": "keyline-icons:refrigerator-sharp-fill",
	});
}

export default Component;
