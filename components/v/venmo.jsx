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
		"content": `<style>.i2wv5tb1r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.25 4.45a14.26 14.26 0 0 1 2.06 7.8c0 9.72-8.3 22.34-15 31.2h-15.4L5.74 6.58L19.21 5.3l3.27 26.24c3.05-5 6.81-12.76 6.81-18.08A14.5 14.5 0 0 0 28 6.94Z");
}
</style><path class="i2wv5tb1r"/>`,
		"fallback": "arcticons:venmo",
	});
}

export default Component;
