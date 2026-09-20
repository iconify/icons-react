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
		"content": `<style>.wa2kbpblj {
  fill: currentColor;
  d: path("M2 20V4h8l2 2h10v14zm2-2h16V8h-8.825l-2-2H4zm0 0V6zm3.825-1.625l4.95-4.95L11.35 10l-3.525 3.55L6.4 12.125L5 13.55zm6.575 0l1.6-1.6l1.6 1.6l1.4-1.4l-1.6-1.6l1.6-1.6l-1.4-1.4l-1.6 1.6l-1.6-1.6l-1.4 1.4l1.6 1.6l-1.6 1.6z");
}
</style><path class="wa2kbpblj"/>`,
		"fallback": "material-symbols:rule-folder-outline-sharp",
	});
}

export default Component;
