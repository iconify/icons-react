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
		"content": `<style>.wdg8faclo {
  fill: currentColor;
  d: path("M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0S0 4.477 0 10s4.477 10 10 10M7 9h6a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2");
}
</style><path class="wdg8faclo"/>`,
		"fallback": "fluent:presence-dnd-20-filled",
	});
}

export default Component;
