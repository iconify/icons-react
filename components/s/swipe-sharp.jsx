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
		"content": `<style>.ucc7bkbht {
  fill: currentColor;
  d: path("M21 7.385h-4.384V6.5H19.9q-1.708-1.392-3.704-2.263T12 3.365t-4.196.87Q5.808 5.109 4.1 6.5h3.285v.885H3V3h.885v2.506q1.78-1.36 3.83-2.192T12 2.48t4.285.833t3.83 2.192V3H21zM10.806 21l-5.667-5.654l.92-.894l3.441.857V6.5h1v7.77h1.827V10h1v4.27h1.846V11h1v3.27H18V13h1v8z");
}
</style><path class="ucc7bkbht"/>`,
		"fallback": "material-symbols-light:swipe-sharp",
	});
}

export default Component;
