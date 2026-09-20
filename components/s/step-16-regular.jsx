import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ya5wgrnmv {
  fill: currentColor;
  d: path("M9 3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v8.5a2.5 2.5 0 0 1-2.5 2.5H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3V7a1 1 0 0 1 1-1h3zm4 0h-3v3a1 1 0 0 1-1 1H6v2a1 1 0 0 1-1 1H2v3h9.5a1.5 1.5 0 0 0 1.5-1.5z");
}
</style><path class="ya5wgrnmv"/>`,
		"fallback": "fluent:step-16-regular",
	});
}

export default Component;
