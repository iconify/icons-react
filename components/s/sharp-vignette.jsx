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
		"content": `<style>.e_84xkawg {
  fill: currentColor;
  d: path("M23 3H1v18h22zM12 18c-4.42 0-8-2.69-8-6s3.58-6 8-6s8 2.69 8 6s-3.58 6-8 6");
}
</style><path class="e_84xkawg"/>`,
		"fallback": "ic:sharp-vignette",
	});
}

export default Component;
