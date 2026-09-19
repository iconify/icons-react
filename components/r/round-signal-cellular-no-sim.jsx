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
		"content": `<style>.m546mdbhl {
  fill: currentColor;
  d: path("M19 5c0-1.1-.9-2-2-2h-6.17c-.53 0-1.04.21-1.42.59L7.95 5.06L19 16.11zM3.09 4.44a.996.996 0 0 0 0 1.41L5 7.78V19a2 2 0 0 0 2 2h11.23l.91.91a.996.996 0 1 0 1.41-1.41L4.5 4.44a.996.996 0 0 0-1.41 0");
}
</style><path class="m546mdbhl"/>`,
		"fallback": "ic:round-signal-cellular-no-sim",
	});
}

export default Component;
