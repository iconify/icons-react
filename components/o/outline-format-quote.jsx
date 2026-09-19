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
		"content": `<style>.l1t9t1rtc {
  fill: currentColor;
  d: path("M18.62 18h-5.24l2-4H13V6h8v7.24zm-2-2h.76L19 12.76V8h-4v4h3.62zm-8 2H3.38l2-4H3V6h8v7.24zm-2-2h.76L9 12.76V8H5v4h3.62z");
}
</style><path class="l1t9t1rtc"/>`,
		"fallback": "ic:outline-format-quote",
	});
}

export default Component;
