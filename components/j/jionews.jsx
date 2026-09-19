import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mt27cncxc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m41.705 22.622l-12.846-7.416a1.591 1.591 0 0 0-2.387 1.378v14.832a1.591 1.591 0 0 0 2.387 1.378l12.846-7.416a1.591 1.591 0 0 0 0-2.756m-20.419 6.256H5.5m15.786-9.756H5.5m15.786-9.755H5.5m15.786 29.266H5.5");
}
</style><path class="mt27cncxc"/>`,
		"fallback": "arcticons:jionews",
	});
}

export default Component;
