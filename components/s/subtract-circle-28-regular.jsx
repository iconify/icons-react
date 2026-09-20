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
		"content": `<style>.q91erjblo {
  fill: currentColor;
  d: path("M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14S7.373 2 14 2m0 1.5C8.201 3.5 3.5 8.201 3.5 14S8.201 24.5 14 24.5S24.5 19.799 24.5 14S19.799 3.5 14 3.5m5.25 9.75a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5z");
}
</style><path class="q91erjblo"/>`,
		"fallback": "fluent:subtract-circle-28-regular",
	});
}

export default Component;
