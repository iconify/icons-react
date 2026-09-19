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
		"content": `<style>.g0r1g8t_h {
  fill: currentColor;
  d: path("M17.2 3H6.8l-5.2 9l5.2 9h10.4l5.2-9zm-1.15 16h-8.1l-4.04-7l4.04-7h8.09l4.04 7z");
}

.rca52mb-x {
  fill: currentColor;
  d: path("M16.05 19h-8.1l-4.04-7l4.04-7h8.1l4.04 7z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="rca52mb-x"/><path class="g0r1g8t_h"/>`,
		"fallback": "ic:twotone-hexagon",
	});
}

export default Component;
