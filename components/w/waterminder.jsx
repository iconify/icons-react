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
		"content": `<style>.jgzo8i0ql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.49 29.01C38.49 18.36 24 4.5 24 4.5S9.51 18.36 9.51 29.01c0 8.003 6.488 14.49 14.49 14.49s14.49-6.487 14.49-14.49");
}
</style><path class="jgzo8i0ql"/>`,
		"fallback": "arcticons:waterminder",
	});
}

export default Component;
