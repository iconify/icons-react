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
		"content": `<style>.p86bd2bnm {
  fill: currentColor;
  d: path("M4.75 4A2.75 2.75 0 0 0 2 6.75v10.5A2.75 2.75 0 0 0 4.75 20h14.5A2.75 2.75 0 0 0 22 17.25V6.75A2.75 2.75 0 0 0 19.25 4zM7.5 8h9a1.5 1.5 0 0 1 0 3h-9a1.5 1.5 0 0 1 0-3");
}
</style><path class="p86bd2bnm"/>`,
		"fallback": "fluent:slide-text-title-24-filled",
	});
}

export default Component;
