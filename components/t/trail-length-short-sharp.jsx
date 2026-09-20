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
		"content": `<style>.pmv-7_tey {
  fill: currentColor;
  d: path("M15 17q-1.825 0-3.187-1.137T10.1 13H4v-2h6.1q.125-.575.338-1.075T11 9H6V7h9q2.075 0 3.538 1.463T20 12t-1.463 3.538T15 17m-8 0v-2h3v2z");
}
</style><path class="pmv-7_tey"/>`,
		"fallback": "material-symbols:trail-length-short-sharp",
	});
}

export default Component;
