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
		"content": `<style>.n7fjlubzi {
  fill: currentColor;
  d: path("m15.45 15.05l1.1-1.05l-2.1-2.1q.275-.425.413-.9T15 10q0-1.475-1.037-2.488T11.5 6.5T9.037 7.513T8 10t1.038 2.488T11.5 13.5q.525 0 .988-.137t.912-.413zM11.5 12q-.825 0-1.412-.587T9.5 10t.588-1.412T11.5 8q.8 0 1.4.588T13.5 10t-.587 1.413T11.5 12M4 18q-.825 0-1.412-.587T2 16V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.587 1.413T20 18zm0-2h16V5H4zm0 0V5zm-3 5v-2h22v2z");
}
</style><path class="n7fjlubzi"/>`,
		"fallback": "material-symbols:screen-search-desktop-outline",
	});
}

export default Component;
