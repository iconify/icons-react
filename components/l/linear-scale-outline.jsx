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
		"content": `<style>.tm-7l9wpd {
  fill: currentColor;
  d: path("M17 17q-1.8 0-3.175-1.137T12.1 13H6.8q-.3.675-.925 1.088T4.5 14.5q-1.05 0-1.775-.725T2 12t.725-1.775T4.5 9.5q.75 0 1.375.413T6.8 11h5.3q.35-1.725 1.725-2.863T17 7q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17m2.125-2.875Q20 13.25 20 12t-.875-2.125T17 9t-2.125.875T14 12t.875 2.125T17 15t2.125-.875");
}
</style><path class="tm-7l9wpd"/>`,
		"fallback": "material-symbols:linear-scale-outline",
	});
}

export default Component;
