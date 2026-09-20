import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ipb0p6bhs {
  fill: currentColor;
  d: path("M3.5 11a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M8 11a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m4.5 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m6-1.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0");
}
</style><path class="ipb0p6bhs"/>`,
		"fallback": "fluent:line-horizontal-1-dot-20-filled",
	});
}

export default Component;
