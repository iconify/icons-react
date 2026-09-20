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
		"content": `<style>.iuv0p8l1z {
  fill: currentColor;
  d: path("m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z");
}
</style><path class="iuv0p8l1z"/>`,
		"fallback": "material-symbols:keyboard-arrow-left-sharp",
	});
}

export default Component;
