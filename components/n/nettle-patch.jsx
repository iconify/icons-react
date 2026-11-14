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
		"content": `<style>.hlawg_9db {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 18l-2.75-5l1.5-.75l-2-3l1.75-.75L12 3l1.5 5.5l1.75.75l-2 3l1.5.75Zm0 0l-4.25.005l.028-1.117l-2.794-.07l.366-1.221l-2.621-2.526l3.56.76l.807-.987l1.621 2.278l.911-.648Zm0 0l2.372-3.526l.911.648l1.621-2.278l.807.987l3.56-.76l-2.621 2.526l.366 1.221l-2.794.07l.028 1.117Zm0 0v3m-8 0h16");
}
</style><path class="hlawg_9db"/>`,
		"fallback": "uix-sharp:nettle-patch",
	});
}

export default Component;
