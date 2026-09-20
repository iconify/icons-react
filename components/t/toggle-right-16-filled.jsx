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
		"content": `<style>.zztj777xk {
  fill: currentColor;
  d: path("M5 4a4 4 0 1 0 0 8h6a4 4 0 0 0 0-8zm6 6a2 2 0 1 1 0-4a2 2 0 0 1 0 4");
}
</style><path class="zztj777xk"/>`,
		"fallback": "fluent:toggle-right-16-filled",
	});
}

export default Component;
