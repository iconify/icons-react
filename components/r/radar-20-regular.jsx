import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wvp6xu9qs {
  fill: currentColor;
  d: path("m14.497 3.382l-.722.722A7 7 0 1 0 14.95 14.95a.5.5 0 0 1 .707.707a8 8 0 1 1-1.16-12.275m-2.935 2.935l.751-.751a5.002 5.002 0 0 0-5.849 7.97a5 5 0 0 0 7.072 0a.5.5 0 1 0-.708-.708a4 4 0 1 1-1.266-6.511m4.292-2.17a.5.5 0 0 1 0 .707L10.966 9.74a1.001 1.001 0 1 1-.707-.707l4.887-4.888a.5.5 0 0 1 .708 0M17 13.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M16.5 7a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m1.5 4.25a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-.5-2a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-2.5 2a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-.5-2a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1");
}
</style><path class="wvp6xu9qs"/>`,
		"fallback": "fluent:radar-20-regular",
	});
}

export default Component;
