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
		"content": `<style>.s8fle-bze {
  fill: currentColor;
  d: path("M14.751 3.5c2.04 0 3.75 1.593 3.75 3.625c0 1.184-.582 2.217-1.47 2.875c.888.658 1.468 1.692 1.468 2.875c0 2.032-1.71 3.625-3.75 3.625c-1.613 0-3.208-1.004-3.71-2.514a.75.75 0 0 1 1.423-.473c.27.81 1.223 1.487 2.287 1.487c1.273 0 2.25-.981 2.25-2.125s-.977-2.125-2.25-2.125h-1a.75.75 0 0 1 0-1.5h1.002c1.273 0 2.25-.981 2.25-2.125S16.024 5 14.751 5c-1.064 0-2.02.677-2.29 1.486a.75.75 0 0 1-1.423-.474c.503-1.51 2.1-2.512 3.713-2.512M9.25 4a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-1.5 0V10.5h-5v4.75a.75.75 0 0 1-1.5 0V4.75a.75.75 0 0 1 1.5 0V9h5V4.75A.75.75 0 0 1 9.25 4");
}
</style><path class="s8fle-bze"/>`,
		"fallback": "fluent:text-header-3-20-filled",
	});
}

export default Component;
