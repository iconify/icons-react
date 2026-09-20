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
		"content": `<style>.x9w4k2bhw {
  fill: currentColor;
  d: path("M10 16.125h4V13h-4zM10 11h4V7.9h-4zm-6 0h4V7.825L4 6.65zm0 6.375l4-1.1V13H4zm16 0V13h-4v3.275zM16 11h4V6.75L16 7.8zM2 20V4l7 2h6l7-1.875V20l-7-1.875H9z");
}
</style><path class="x9w4k2bhw"/>`,
		"fallback": "material-symbols:spatial-gallery-outline-sharp",
	});
}

export default Component;
