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
		"content": `<style>.e1c1fvm9g {
  fill: currentColor;
  d: path("M3 12h3v7h3v-7h3V9H3zm6-5h5v12h3V7h5V4H9z");
}
</style><path class="e1c1fvm9g"/>`,
		"fallback": "ic:twotone-format-size",
	});
}

export default Component;
