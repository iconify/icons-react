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
		"content": `<style>.siy1hw4oi {
  fill: currentColor;
  d: path("M12 3C6.95 3 3.15 4.85 0 7.23L12 22L24 7.25C20.85 4.87 17.05 3 12 3M2.92 7.65C5.8 5.85 8.74 5 12 5c3.25 0 6.18.85 9.08 2.67L12 18.83zM11 10h2v6h-2zm0-4h2v2h-2z");
}
</style><path class="siy1hw4oi"/>`,
		"fallback": "ic:outline-perm-scan-wifi",
	});
}

export default Component;
