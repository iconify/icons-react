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
		"content": `<style>.te22ygzhy {
  fill: currentColor;
  d: path("M6 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 1 1 0 1h-8a.5.5 0 0 1-.5-.5M3.56 7.732a.5.5 0 0 1 .708.707L3.208 9.5l1.06 1.06a.5.5 0 1 1-.707.708L2.146 9.854a.5.5 0 0 1 0-.708zM6.5 9a.5.5 0 0 0 0 1h11a.5.5 0 1 0 0-1zM6 14.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5");
}
</style><path class="te22ygzhy"/>`,
		"fallback": "fluent:text-indent-decrease-ltr-20-regular",
	});
}

export default Component;
