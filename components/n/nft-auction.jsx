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
		"content": `<style>.gzfsbeezp {
  d: path("M15.5 20.5L18 18l3.5 3");
}

.ugkpcb-yr {
  d: path("m11.732 2.447l7.071 7.071l-3.535 3.535l-7.071-7.071ZM11.75 9.5L6.5 14.75m5.5 6.2V21H3v-3.25h9v2.3M15.5 16h6v5.5h-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ugkpcb-yr"/><path class="gzfsbeezp"/></g>`,
		"fallback": "uix-sharp:nft-auction",
	});
}

export default Component;
