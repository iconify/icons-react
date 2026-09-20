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
		"content": `<style>.wtsbchbzd {
  fill: currentColor;
  d: path("M252 208a12 12 0 0 1-12 12h-48a12 12 0 0 1-9.6-19.2l43.17-57.56a12 12 0 0 0-2.35-16.82a12 12 0 0 0-18.54 5.58a12 12 0 0 1-22.63-8a36.3 36.3 0 0 1 5.2-9.67a36 36 0 0 1 57.5 43.34L216 196h24a12 12 0 0 1 12 12M151.86 46.93a12 12 0 0 0-16.93 1.21L92 97.68L49.07 48.14a12 12 0 0 0-18.14 15.72L76.12 116l-45.19 52.14a12 12 0 0 0 18.14 15.72L92 134.32l42.93 49.54a12 12 0 1 0 18.14-15.72L107.88 116l45.19-52.14a12 12 0 0 0-1.21-16.93");
}
</style><path class="wtsbchbzd"/>`,
		"fallback": "ph:text-subscript-bold",
	});
}

export default Component;
