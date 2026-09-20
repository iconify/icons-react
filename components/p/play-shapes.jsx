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
		"content": `<style>.to3kofbkt {
  fill: currentColor;
  d: path("m2.77 10.423l4.268-7.442l4.27 7.442zM7.057 20.52q-1.477 0-2.498-1.02q-1.021-1.024-1.021-2.5t1.022-2.498q1.02-1.021 2.498-1.021q1.477 0 2.498 1.02q1.02 1.022 1.02 2.499t-1.02 2.498Q8.535 20.52 7.058 20.52m6.461 0v-7.038h7.039v7.038zm.689-10.288l-.689-.689l2.831-2.83l-2.83-2.831l.688-.708l2.83 2.83l2.831-2.83l.689.708l-2.831 2.83l2.83 2.831l-.688.689L17.04 7.4z");
}
</style><path class="to3kofbkt"/>`,
		"fallback": "material-symbols-light:play-shapes",
	});
}

export default Component;
