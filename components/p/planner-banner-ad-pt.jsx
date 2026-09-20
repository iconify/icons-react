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
		"content": `<style>.qprm0ubrs {
  fill: currentColor;
  d: path("M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm1-4h10l-3.45-4.5l-2.3 3l-1.55-2z");
}
</style><path class="qprm0ubrs"/>`,
		"fallback": "material-symbols:planner-banner-ad-pt",
	});
}

export default Component;
