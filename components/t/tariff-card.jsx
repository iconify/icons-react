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
		"content": `<style>.hqja51g1h {
  d: path("M13.75 13.75h4l3.75 3.75l-4 4l-3.75-3.75Zm2.75 2.75h.01");
}

.i5lu7b39y {
  d: path("M10.9 15.5H2.5v-12h17v8.1m-17-4.1h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i5lu7b39y"/><path class="hqja51g1h"/></g>`,
		"fallback": "uix-sharp:tariff-card",
	});
}

export default Component;
