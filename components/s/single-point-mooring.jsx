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
		"content": `<style>.ks9teom-y {
  d: path("M7 8.25a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.rbwedcb5p {
  d: path("M2.5 11.75q1.75-1.5 3.5 0q1.25 1 2.5 0m7 0q1.25-1 2.5 0q1.75 1.5 3.5 0m-9.5 1.5V15m0 2.5V19m0 2.25v.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ks9teom-y"/><path class="rbwedcb5p"/></g>`,
		"fallback": "uix-sharp:single-point-mooring",
	});
}

export default Component;
