import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q0b96rb4n {
  fill: currentColor;
  d: path("M5.82 2.275c.956-1.7 3.404-1.7 4.36 0l4.496 8.004c.936 1.667-.269 3.725-2.18 3.725H3.503c-1.911 0-3.115-2.058-2.179-3.725zm3.488.49a1.5 1.5 0 0 0-2.616 0L2.195 10.77a1.5 1.5 0 0 0 1.308 2.234h8.993a1.5 1.5 0 0 0 1.308-2.234zM8 9.5A.75.75 0 1 1 8 11a.75.75 0 0 1 0-1.5M8 5a.5.5 0 0 1 .5.5V8a.5.5 0 0 1-1 0V5.5A.5.5 0 0 1 8 5");
}
</style><path class="q0b96rb4n"/>`,
		"fallback": "fluent:warning-16-regular",
	});
}

export default Component;
