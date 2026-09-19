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
		"content": `<style>.i2y-9b59z {
  fill: currentColor;
  d: path("M4 3h16v2H4zm4 8h3v10h2V11h3l-4-4z");
}
</style><path class="i2y-9b59z"/>`,
		"fallback": "ic:twotone-vertical-align-top",
	});
}

export default Component;
