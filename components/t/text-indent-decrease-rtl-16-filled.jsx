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
		"content": `<style>.ch-hh4-za {
  fill: currentColor;
  d: path("M4 3.75A.75.75 0 0 1 4.75 3h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 4 3.75m8.22 1.97a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.97-.97l-.97-.97a.75.75 0 0 1 0-1.06M1 7.75A.75.75 0 0 1 1.75 7h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 1 7.75m5 4a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75");
}
</style><path class="ch-hh4-za"/>`,
		"fallback": "fluent:text-indent-decrease-rtl-16-filled",
	});
}

export default Component;
