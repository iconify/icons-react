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
		"content": `<style>.iy3jfe_-j {
  d: path("m12 7l1 2.5l2.75.25l-2 1.75l.5 2.75l-2.25-1.5l-2.25 1.5l.5-2.75l-2-1.75L11 9.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xkc8ejbjp {
  d: path("M12 2.5L19.5 5v6c0 5-3.5 8.5-7.5 10.5c-4-2-7.5-5.5-7.5-10.5V5Z");
}
</style><g class="ulnmmdpxh"><path class="xkc8ejbjp"/><path class="iy3jfe_-j"/></g>`,
		"fallback": "uix-sharp:league-logo-shield",
	});
}

export default Component;
