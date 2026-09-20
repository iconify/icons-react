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
		"content": `<style>.bf4t9pbre {
  fill: currentColor;
  d: path("M2 20V4h20v16zm10-7l8-5V6l-8 5l-8-5v2z");
}
</style><path class="bf4t9pbre"/>`,
		"fallback": "material-symbols:mail-sharp",
	});
}

export default Component;
