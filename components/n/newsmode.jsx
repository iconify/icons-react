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
		"content": `<style>.ataqonblw {
  fill: currentColor;
  d: path("M4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v14q0 .825-.587 1.413T20 21zm2-4h12v-2H6zm0-4h4V7H6zm6 0h6v-2h-6zm0-4h6V7h-6z");
}
</style><path class="ataqonblw"/>`,
		"fallback": "material-symbols:newsmode",
	});
}

export default Component;
