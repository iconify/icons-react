import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mns-w4bba {
  fill: currentColor;
  d: path("M4 24c0-8.284 6.716-15 15-15h10c8.284 0 15 6.716 15 15s-6.716 15-15 15H19c-8.284 0-15-6.716-15-15");
}
</style><path class="mns-w4bba"/>`,
		"fallback": "fluent:oval-48-filled",
	});
}

export default Component;
