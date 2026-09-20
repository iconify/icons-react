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
		"content": `<style>.l65189boa {
  fill: currentColor;
  d: path("M3 21V3h18v18zm3-4h6v-2H6zm6-8h6V7h-6zm-3 4h6v-2H9z");
}
</style><path class="l65189boa"/>`,
		"fallback": "material-symbols:view-timeline-sharp",
	});
}

export default Component;
