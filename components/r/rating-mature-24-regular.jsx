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
		"content": `<style>.x0lishbra {
  fill: currentColor;
  d: path("M8.826 8.27a.75.75 0 0 0-1.326.48v6.5a.75.75 0 1 0 1.5 0v-4.428l2.424 2.908a.75.75 0 0 0 1.152 0L15 10.822v4.428a.75.75 0 1 0 1.5 0v-6.5a.75.75 0 0 0-1.326-.48L12 12.079zM6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75z");
}
</style><path class="x0lishbra"/>`,
		"fallback": "fluent:rating-mature-24-regular",
	});
}

export default Component;
