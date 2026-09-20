import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.l8a6xjb3y {
  fill: currentColor;
  d: path("m235.85 72.57l-106.2-30.34a6 6 0 0 0-2.5-.17L22 57.08a14.07 14.07 0 0 0-12 13.86v114.12a14.07 14.07 0 0 0 12 13.86l105.13 15a6 6 0 0 0 .85.06a6 6 0 0 0 1.65-.23l106.2-30.34A14.06 14.06 0 0 0 246 170V86a14.06 14.06 0 0 0-10.15-13.43M96 122H78V61.2l44-6.28v146.16l-44-6.28V134h18a6 6 0 0 0 0-12m-74 63.06V70.94a2 2 0 0 1 1.72-2l42.28-6V122H48a6 6 0 0 0 0 12h18v59.08l-42.28-6a2 2 0 0 1-1.72-2.02M234 170a2 2 0 0 1-1.45 1.92L134 200.05V56l98.55 28.16A2 2 0 0 1 234 86Z");
}
</style><path class="l8a6xjb3y"/>`,
		"fallback": "ph:shipping-container-light",
	});
}

export default Component;
