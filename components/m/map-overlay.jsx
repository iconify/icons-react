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
		"content": `<style>.yrfvh0bxl {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1.75H6q-1.76 0-3.005 1.245T1.75 6v6q0 1.76 1.245 3.005T6 16.25h1.75V18q0 1.76 1.245 3.005T12 22.25h6q1.76 0 3.005-1.245T22.25 18v-6q0-1.76-1.245-3.005T18 7.75h-1.75V6q0-1.76-1.245-3.005T12 1.75");
}
</style><path class="yrfvh0bxl"/>`,
		"fallback": "uix-solid:map-overlay",
	});
}

export default Component;
