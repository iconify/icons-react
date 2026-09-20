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
		"content": `<style>.fvuttbbhd {
  fill: currentColor;
  d: path("M15 8a2 2 0 0 0-2-2H3a2 2 0 1 0 0 4h10a2 2 0 0 0 2-2m-2 1H3a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2M9 3a2 2 0 0 0-2-2H3a2 2 0 1 0 0 4h4a2 2 0 0 0 2-2M3 4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm6 7a2 2 0 1 1 0 4H3a2 2 0 1 1 0-4zm0 3a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2z");
}
</style><path class="fvuttbbhd"/>`,
		"fallback": "fluent:poll-horizontal-16-regular",
	});
}

export default Component;
