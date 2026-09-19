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
		"content": `<style>.uyv2wbtnk {
  fill: currentColor;
  d: path("M11.5 9a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 0-5M22 4H2v16h20zm-5.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7S16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9z");
}
</style><path class="uyv2wbtnk"/>`,
		"fallback": "ic:sharp-pageview",
	});
}

export default Component;
