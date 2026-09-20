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
		"content": `<style>.jofi20bkh {
  fill: currentColor;
  d: path("M5.75 18h5.15v-1.75H8.725l.775-2h4.85l.75 2h-2.125V18h5.275v-1.75h-1L13.2 6h-2.375L6.75 16.25h-1zm4.375-5.375l1.7-4.425H12l1.7 4.425zM4 22q-.825 0-1.412-.587T2 20V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v16q0 .825-.587 1.413T20 22zm0-2h16V4H4zm0 0V4z");
}
</style><path class="jofi20bkh"/>`,
		"fallback": "material-symbols:slab-serif-outline",
	});
}

export default Component;
