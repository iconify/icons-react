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
		"content": `<style>.rqekgqf0e {
  fill: currentColor;
  d: path("M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0s10 4.477 10 10");
}
</style><path class="rqekgqf0e"/>`,
		"fallback": "fluent:presence-busy-20-filled",
	});
}

export default Component;
