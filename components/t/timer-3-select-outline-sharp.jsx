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
		"content": `<style>.jgl6rublj {
  fill: currentColor;
  d: path("M4 19v-3h6v-2.5H4v-3h6V8H4V5h9v5.5L11.5 12l1.5 1.5V19zm11 0v-2h4v-1h-4v-5h6v2h-4v1h4v5z");
}
</style><path class="jgl6rublj"/>`,
		"fallback": "material-symbols:timer-3-select-outline-sharp",
	});
}

export default Component;
