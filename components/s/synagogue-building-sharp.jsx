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
		"content": `<style>.fshlqcimf {
  d: path("m12.15 7.31l.48.84l.15.26h.3l.96-.01h.3l-.15.26l-.49.83l-.15.26l.15.26l.49.83l.15.26h-.3l-.96-.01h-.3l-.15.26l-.48.84l-.15.26l-.15-.26l-.48-.84l-.15-.26h-.3l-.96.01h-.3l.15-.26l.49-.83l.15-.26l-.15-.26l-.49-.83l-.15-.26h.3l.96.01h.3l.15-.26l.48-.84l.15-.26zm-2.4 13.94V17a2.25 2.25 0 0 1 4.5 0v4.25");
}

.k5c_xnbcf {
  d: path("M3.25 20.5v-11l.64-.39l7.47-4.47l.64-.39l.64.39l7.47 4.47l.64.39v11.75H3.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="k5c_xnbcf"/><path class="fshlqcimf"/></g>`,
		"fallback": "iconoven:synagogue-building-sharp",
	});
}

export default Component;
