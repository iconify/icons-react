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
		"content": `<style>.o-kjx9blo {
  fill: currentColor;
  d: path("M21 2h-6.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H3v20h18zm-9 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m7 18H5V4h2v3h10V4h2z");
}
</style><path class="o-kjx9blo"/>`,
		"fallback": "ic:sharp-content-paste",
	});
}

export default Component;
