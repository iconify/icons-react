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
		"content": `<style>.h3qxycm2l {
  fill: currentColor;
  d: path("M9.64 16.36c1.3 1.3 3.42 1.3 4.72 0s1.3-3.42 0-4.72zM18 2.01L6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99M11 5c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M8 5c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m4 14c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5");
}
</style><path class="h3qxycm2l"/>`,
		"fallback": "ic:round-local-laundry-service",
	});
}

export default Component;
