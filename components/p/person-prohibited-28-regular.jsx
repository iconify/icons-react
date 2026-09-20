import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.oji454bdc {
  fill: currentColor;
  d: path("M15.114 25.719a7.5 7.5 0 0 1-1.04-1.35q-.984.13-2.074.131c-5.111 0-8.5-2.111-8.5-4.785V19l.007-.145A1.5 1.5 0 0 1 5 17.5h8.624A7.5 7.5 0 0 1 14.5 16H5a3 3 0 0 0-3 3v.715C2 23.433 6.21 26 12 26a17 17 0 0 0 3.114-.281M18 8A6 6 0 1 0 6 8a6 6 0 0 0 12 0M7.5 8a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0M27 20.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-1.5 0c0-1.11-.362-2.136-.974-2.965l-6.991 6.991A5 5 0 0 0 25.5 20.5m-9.026 2.965l6.991-6.991a5 5 0 0 0-6.991 6.991");
}
</style><path class="oji454bdc"/>`,
		"fallback": "fluent:person-prohibited-28-regular",
	});
}

export default Component;
