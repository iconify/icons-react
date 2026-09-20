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
		"content": `<style>.raiev2bfv {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v3.5h14V6a3 3 0 0 0-3-3zm11 7.5h-6.5V17H14a3 3 0 0 0 3-3zm-7.5 0H3V14a3 3 0 0 0 3 3h3.5z");
}
</style><path class="raiev2bfv"/>`,
		"fallback": "fluent:layout-row-two-split-bottom-20-filled",
	});
}

export default Component;
