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
		"content": `<style>.fczp76bmy {
  d: path("m2.5 5.5l6-2l7 2l6-2v15l-6 2l-7-2l-6 2Z");
}

.qahv76b5l {
  d: path("m16.5 8l-9 3.5l4.25.75l.75 4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fczp76bmy"/><path class="qahv76b5l"/></g>`,
		"fallback": "uix-sharp:map-player-arrow",
	});
}

export default Component;
