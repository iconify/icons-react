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
		"content": `<style>.yoa8x2zif {
  fill: currentColor;
  d: path("M21 2c.55 0 1 .45 1 1v18c0 .55-.45 1-1 1s-1-.45-1-1V3c0-.55.45-1 1-1M3.5 10h13c.83 0 1.5-.67 1.5-1.5S17.33 7 16.5 7h-13C2.67 7 2 7.67 2 8.5S2.67 10 3.5 10m6 7h7c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-7c-.83 0-1.5.67-1.5 1.5S8.67 17 9.5 17");
}
</style><path class="yoa8x2zif"/>`,
		"fallback": "ic:round-align-horizontal-right",
	});
}

export default Component;
