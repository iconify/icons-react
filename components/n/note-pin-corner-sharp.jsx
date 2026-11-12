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
		"content": `<style>.gbhv6zxjj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 20H4V4h16v4m-5 5h4v3l2 2h-8l2-2zm-1 0h6m-3 5v3");
}
</style><path class="gbhv6zxjj"/>`,
		"fallback": "coolicons:note-pin-corner-sharp",
	});
}

export default Component;
