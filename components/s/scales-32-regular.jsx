import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mhwpzlbnd {
  fill: currentColor;
  d: path("M27 3a1 1 0 1 1 0 2h-1.572l3.511 9.658q.06.166.061.342a5 5 0 0 1-10 0q0-.176.06-.342L22.573 5H17v18h6a3 3 0 1 1 0 6H9a3 3 0 1 1 0-6h6V5H9.428l3.512 9.658q.06.166.06.342a5 5 0 0 1-10 0a1 1 0 0 1 .06-.342L6.573 5H5a1 1 0 0 1 0-2zM9 25a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2zm-3.826-9c.412 1.165 1.52 2 2.826 2a3 3 0 0 0 2.826-2zm16 0a2.998 2.998 0 0 0 5.652 0zM5.428 14h5.144L8 6.925zm16 0h5.144L24 6.925z");
}
</style><path class="mhwpzlbnd"/>`,
		"fallback": "fluent:scales-32-regular",
	});
}

export default Component;
