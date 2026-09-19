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
		"content": `<style>.wu2qubb-z {
  fill: currentColor;
  d: path("M11 3v10H8l4 4l4-4h-3V3zM4 19h16v2H4z");
}
</style><path class="wu2qubb-z"/>`,
		"fallback": "ic:twotone-vertical-align-bottom",
	});
}

export default Component;
