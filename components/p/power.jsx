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
		"content": `<style>.gpqxzodbl {
  fill: currentColor;
  d: path("M9.5 21v-3L6 14.5V9q0-.825.588-1.412T8 7h1L8 8V3h2v4h4V3h2v5l-1-1h1q.825 0 1.413.588T18 9v5.5L14.5 18v3z");
}
</style><path class="gpqxzodbl"/>`,
		"fallback": "material-symbols:power",
	});
}

export default Component;
