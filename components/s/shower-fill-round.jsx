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
		"content": `<style>.phii_pblt {
  fill: currentColor;
  d: path("m4.707 3.293l2.36 2.36a5.24 5.24 0 0 1 4.905-.512c.65.263 1.241.655 1.735 1.152a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0a5.2 5.2 0 0 1-1.152-1.735a5.24 5.24 0 0 1 .512-4.905l-2.36-2.36a.999.999 0 1 1 1.414-1.414M16.01 9a1 1 0 0 1 0 2H16a1 1 0 0 1 0-2Zm4 1a1 1 0 0 1 0 2H20a1 1 0 0 1 0-2Zm-7 2a1 1 0 0 1 0 2H13a1 1 0 0 1 0-2Zm4 1a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2Zm-7 2a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2Zm4 1a1 1 0 0 1 0 2H14a1 1 0 0 1 0-2Zm-3 3a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2Z");
}
</style><path class="phii_pblt"/>`,
		"fallback": "coolicons:shower-fill-round",
	});
}

export default Component;
