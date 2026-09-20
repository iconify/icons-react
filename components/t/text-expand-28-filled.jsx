import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gv0z4u7dt {
  fill: currentColor;
  d: path("M25 22a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM8.5 7a6.5 6.5 0 1 1 0 13a6.5 6.5 0 0 1 0-13m0 2a.5.5 0 0 0-.5.5V13H4.5a.5.5 0 0 0 0 1H8v3.5a.5.5 0 0 0 1 0V14h3.5a.5.5 0 0 0 0-1H9V9.5a.5.5 0 0 0-.5-.5M25 15a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zm0-6a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zm0-6a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2z");
}
</style><path class="gv0z4u7dt"/>`,
		"fallback": "fluent:text-expand-28-filled",
	});
}

export default Component;
