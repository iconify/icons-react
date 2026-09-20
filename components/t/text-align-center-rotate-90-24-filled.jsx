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
		"content": `<style>.r6q_jlbkm {
  fill: currentColor;
  d: path("M18 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1M6 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m7-3a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0z");
}
</style><path class="r6q_jlbkm"/>`,
		"fallback": "fluent:text-align-center-rotate-90-24-filled",
	});
}

export default Component;
