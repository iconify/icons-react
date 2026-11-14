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
		"content": `<style>.kl7v20bwn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.5L9 11l10.5 10.5M12 10l7 7m2.25-2.25L11.5 5q-1.5-1.5-3 0l-1 1m6.5 6l2.25-2.25M17 15l2.25-2.25");
}
</style><path class="kl7v20bwn"/>`,
		"fallback": "uix-sharp:roof-ladder",
	});
}

export default Component;
