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
		"content": `<style>.nu-wvsj3c {
  fill: currentColor;
  d: path("M14 10.5v.5h-3v-.5c0-.83-.67-1.5-1.5-1.5h-1V7h1c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-4C4.67 1 4 1.67 4 2.5v3C4 6.33 4.67 7 5.5 7h1v2h-1C4.67 9 4 9.67 4 10.5v3c0 .83.67 1.5 1.5 1.5h1v2h-1c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-1v-2h1c.83 0 1.5-.67 1.5-1.5V13h3v.5c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-4c-.83 0-1.5.67-1.5 1.5");
}
</style><path class="nu-wvsj3c"/>`,
		"fallback": "ic:round-schema",
	});
}

export default Component;
