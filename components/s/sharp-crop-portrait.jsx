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
		"content": `<style>.zbt7powrw {
  fill: currentColor;
  d: path("M19 3H5v18h14zm-2 16H7V5h10z");
}
</style><path class="zbt7powrw"/>`,
		"fallback": "ic:sharp-crop-portrait",
	});
}

export default Component;
