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
		"content": `<style>.r9v84gbey {
  fill: currentColor;
  d: path("m6 21l-3.5-3.45l1.45-1.4L5 17.2V4h2v13.2l1.05-1.05l1.4 1.4zm4-3.9v-1.9l2.8-.95V9.8l-2.8-1V6.9L21 11v2zm4.4-3.45l4.55-1.6v-.1l-4.55-1.6z");
}
</style><path class="r9v84gbey"/>`,
		"fallback": "material-symbols:text-rotation-down-outline",
	});
}

export default Component;
