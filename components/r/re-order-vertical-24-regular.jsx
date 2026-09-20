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
		"content": `<style>.ao1ibroqf {
  fill: currentColor;
  d: path("M13.25 21.25V2.75a.75.75 0 0 1 1.493-.102l.007.102v18.5a.75.75 0 0 1-1.493.102zm-4 0V2.75a.75.75 0 0 1 1.493-.102l.007.102v18.5a.75.75 0 0 1-1.493.102z");
}
</style><path class="ao1ibroqf"/>`,
		"fallback": "fluent:re-order-vertical-24-regular",
	});
}

export default Component;
