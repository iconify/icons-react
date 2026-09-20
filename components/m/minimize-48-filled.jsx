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
		"content": `<style>.vi7cghb8h {
  fill: currentColor;
  d: path("M6 23.5A1.5 1.5 0 0 1 7.5 22h33a1.5 1.5 0 0 1 0 3h-33A1.5 1.5 0 0 1 6 23.5");
}
</style><path class="vi7cghb8h"/>`,
		"fallback": "fluent:minimize-48-filled",
	});
}

export default Component;
