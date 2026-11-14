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
		"content": `<style>.gofhirb1o {
  d: path("M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm7 4.5v7m-3-5.25l6 3.5m-6 0l6-3.5");
}

.knapdbc1i {
  d: path("M11 2.25L12.75 4L11 5.75m2 12.5L11.25 20L13 21.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gofhirb1o"/><path class="knapdbc1i"/></g>`,
		"fallback": "uix-sharp:refrigeration-cycle",
	});
}

export default Component;
