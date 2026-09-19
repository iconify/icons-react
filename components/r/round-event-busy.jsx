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
		"content": `<style>.m5srp-bvp {
  fill: currentColor;
  d: path("m9.84 16.47l1.91-1.91l1.91 1.91c.29.29.77.29 1.06 0s.29-.77 0-1.06l-1.91-1.91l1.91-1.91c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-1.91 1.91l-1.91-1.91a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.91 1.91l-1.91 1.91c-.29.29-.29.77 0 1.06s.77.29 1.06 0M19 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1H8V2c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 16H6c-.55 0-1-.45-1-1V8h14v10c0 .55-.45 1-1 1");
}
</style><path class="m5srp-bvp"/>`,
		"fallback": "ic:round-event-busy",
	});
}

export default Component;
