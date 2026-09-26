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
		"content": `<style>.e_4yhpbhw {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M20 23C20.5523 23 21 22.5523 21 22L21 2C21 1.4477 20.5523 1 20 1L4 1C3.4477 1 3 1.4477 3 2L3 22C3 22.5523 3.4477 23 4 23L20 23ZM8.5 13.5C7.6716 13.5 7 12.8284 7 12C7 11.1716 7.6716 10.5 8.5 10.5C9.3284 10.5 10 11.1716 10 12C10 12.8284 9.3284 13.5 8.5 13.5Z");
}
</style><path clip-rule="evenodd" class="e_4yhpbhw"/>`,
		"fallback": "keyline-icons:tablet-vertical-sharp-fill",
	});
}

export default Component;
