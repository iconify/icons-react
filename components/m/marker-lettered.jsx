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
		"content": `<style>.jwfkkiwcy {
  d: path("M12 21.5C10.5 20 4.5 14.75 4.5 9.75a7.5 7.5 0 0 1 15 0c0 5-6 10.25-7.5 11.75Z");
}

.n8qxnltyf {
  d: path("m9.75 12.75l2.25-6l2.25 6M10.5 10.5h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jwfkkiwcy"/><path class="n8qxnltyf"/></g>`,
		"fallback": "uix-sharp:marker-lettered",
	});
}

export default Component;
