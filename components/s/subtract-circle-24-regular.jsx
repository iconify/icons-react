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
		"content": `<style>.zfycr97af {
  fill: currentColor;
  d: path("M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 1.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17m4.25 7.75a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5z");
}
</style><path class="zfycr97af"/>`,
		"fallback": "fluent:subtract-circle-24-regular",
	});
}

export default Component;
