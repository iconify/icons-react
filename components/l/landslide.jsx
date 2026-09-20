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
		"content": `<style>.eg1sgobgj {
  fill: currentColor;
  d: path("M3 21v-3.442l3 .973l9.698-3.214L20 21zm3-3.53l-3-.985V13.75l3 .973L11.189 13l3.588 1.544zm11.885-4.24l3.346-1.5V9.193l-3.25-.73l-1.75 1.403v2.039zM6 13.663l-3-.985V9h4.5l2.575 3.329zm6.116-6.008L16 6.096v-3.5l-3.788-.769L10 3.307v2.924z");
}
</style><path class="eg1sgobgj"/>`,
		"fallback": "material-symbols-light:landslide",
	});
}

export default Component;
