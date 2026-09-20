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
		"content": `<style>.l1_woybrd {
  fill: currentColor;
  d: path("M17 7a5 5 0 0 1 0 10H7A5 5 0 0 1 7 7zm-9.75 7.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5");
}
</style><path class="l1_woybrd"/>`,
		"fallback": "fluent:toggle-left-24-filled",
	});
}

export default Component;
