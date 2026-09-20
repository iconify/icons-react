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
		"content": `<style>.o_ze6gb6u {
  fill: currentColor;
  d: path("M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-1.085a1.5 1.5 0 0 0-.354-.56l-.44-.44H12a1 1 0 0 0 1-1V5H8.5A1.5 1.5 0 0 1 7 3.5V3H4a1 1 0 0 0-1 1v1.256a4.5 4.5 0 0 0-1 .502zm6.5 0H13a1 1 0 0 0-1-1H8v.5a.5.5 0 0 0 .5.5m-4 9c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 4.5 13m0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5");
}
</style><path class="o_ze6gb6u"/>`,
		"fallback": "fluent:tab-desktop-search-16-regular",
	});
}

export default Component;
