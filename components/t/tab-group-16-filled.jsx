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
		"content": `<style>.p8ogc48du {
  fill: currentColor;
  d: path("M3 3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm1 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 4 7m.998 6a2 2 0 0 1-1.732-1h7.732a3 3 0 0 0 3-3V5.268a2 2 0 0 1 1 1.732v2a4 4 0 0 1-4 4z");
}
</style><path class="p8ogc48du"/>`,
		"fallback": "fluent:tab-group-16-filled",
	});
}

export default Component;
