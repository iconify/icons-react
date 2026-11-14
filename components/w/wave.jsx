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
		"content": `<style>.cwatfms-c {
  d: path("M2.5 8.5c1.75-3.75 4.25-3.75 6 0s4.25 3.75 6 0s4.25-3.75 6 0");
}

.ol5i9mbsv {
  d: path("M3.5 15.5c1.75-3.75 4.25-3.75 6 0s4.25 3.75 6 0s4.25-3.75 6 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cwatfms-c"/><path class="ol5i9mbsv"/></g>`,
		"fallback": "uix-sharp:wave",
	});
}

export default Component;
