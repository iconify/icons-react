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
		"content": `<style>.fpb86p7rh {
  fill: currentColor;
  d: path("M2 10.5v-6A2.5 2.5 0 0 1 4.5 2h6A2.5 2.5 0 0 1 13 4.5V7H9.5A2.5 2.5 0 0 0 7 9.5V13H4.5A2.5 2.5 0 0 1 2 10.5M7 13v2.5A2.5 2.5 0 0 0 9.5 18h6a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 15.5 7H13v3.5a2.5 2.5 0 0 1-2.5 2.5z");
}
</style><path class="fpb86p7rh"/>`,
		"fallback": "fluent:shape-exclude-20-filled",
	});
}

export default Component;
