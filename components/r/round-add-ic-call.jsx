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
		"content": `<style>.i6qjpweeb {
  fill: currentColor;
  d: path("M14 8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1m5.21 7.27l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84A15.05 15.05 0 0 1 6.6 10.8l1.85-1.85c.43-.43.64-1.04.57-1.64l-.29-2.52a2 2 0 0 0-1.98-1.78H5.02c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1-.76-1.86-1.77-1.97");
}
</style><path class="i6qjpweeb"/>`,
		"fallback": "ic:round-add-ic-call",
	});
}

export default Component;
