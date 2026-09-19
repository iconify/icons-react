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
		"content": `<style>.kjnw9sbxn {
  fill: currentColor;
  d: path("M19 3H5.83L21 18.17V5c0-1.1-.9-2-2-2m-15.49.51A.996.996 0 1 0 2.1 4.92l.9.91V19c0 1.1.9 2 2 2h13.17l.9.9a.996.996 0 1 0 1.41-1.41zM7 17a.5.5 0 0 1-.4-.8l2-2.67c.2-.27.6-.27.8 0L11.25 16l.82-1.1l2.1 2.1z");
}
</style><path class="kjnw9sbxn"/>`,
		"fallback": "ic:round-hide-image",
	});
}

export default Component;
