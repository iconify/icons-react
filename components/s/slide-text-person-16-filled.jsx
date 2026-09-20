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
		"content": `<style>.kpgulkbhx {
  fill: currentColor;
  d: path("M3.5 3A2.5 2.5 0 0 0 1 5.5v5A2.5 2.5 0 0 0 3.5 13h4.538A3 3 0 0 1 8 12.5a2.5 2.5 0 0 1 2.273-2.49A3 3 0 0 1 9.5 8h-5a.5.5 0 0 1 0-1h5.17A3.001 3.001 0 0 1 15 6.341V5.5A2.5 2.5 0 0 0 12.5 3zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m0 4h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1m10-1a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S9 13.75 9 12.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5");
}
</style><path class="kpgulkbhx"/>`,
		"fallback": "fluent:slide-text-person-16-filled",
	});
}

export default Component;
