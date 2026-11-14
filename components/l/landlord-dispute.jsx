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
		"content": `<style>.ah5-twbpp {
  d: path("M7.5 21v-6H12v3.2m2.5 1.55a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm3-1.25l3.75-3.75m-1.5 1.5l1.5 1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xazd_xiqc {
  d: path("M11.831 21H3V10.5L12 3l9 7.5v.569");
}
</style><g class="ulnmmdpxh"><path class="xazd_xiqc"/><path class="ah5-twbpp"/></g>`,
		"fallback": "uix-sharp:landlord-dispute",
	});
}

export default Component;
