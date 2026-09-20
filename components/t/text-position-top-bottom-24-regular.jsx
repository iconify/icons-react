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
		"content": `<style>.qk5lzs7fe {
  fill: currentColor;
  d: path("M3 4.75A.75.75 0 0 1 3.75 4h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 4.75m0 14a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75M9.5 11a2.5 2.5 0 0 1 5 0v4.75a.75.75 0 0 0 1.5 0V11a4 4 0 0 0-8 0v4.75a.75.75 0 0 0 1.5 0z");
}
</style><path class="qk5lzs7fe"/>`,
		"fallback": "fluent:text-position-top-bottom-24-regular",
	});
}

export default Component;
