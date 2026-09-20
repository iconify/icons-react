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
		"content": `<style>.dyuq3ccod {
  fill: currentColor;
  d: path("M3 21V7h14v14zm2-3h10l-3.4-4.5L9 17l-1.6-2.15zm14-1v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zM7 5V3h2v2zm4 0V3h2v2zm4 0V3h2v2zM3 5V3h2v2zm18 0h-2V3h2zm-2 16v-2h2v2z");
}
</style><path class="dyuq3ccod"/>`,
		"fallback": "material-symbols:photo-size-select-large-sharp",
	});
}

export default Component;
