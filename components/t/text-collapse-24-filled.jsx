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
		"content": `<style>.mhxd2m9zn {
  fill: currentColor;
  d: path("M21 18a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2zM6.5 7a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m-2 4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM21 13a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zm0-5a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zm0-5a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2z");
}
</style><path class="mhxd2m9zn"/>`,
		"fallback": "fluent:text-collapse-24-filled",
	});
}

export default Component;
