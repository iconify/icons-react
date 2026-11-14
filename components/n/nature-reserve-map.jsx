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
		"content": `<style>.accmptb0s {
  d: path("m3.505 5.027l2.731-1.285a1.75 1.75 0 0 1 1.072-.136l9.384 1.788a1.75 1.75 0 0 0 1.072-.136l1.611-.758A1.49 1.49 0 0 1 21.5 5.849v11.54a1.75 1.75 0 0 1-1.005 1.584l-2.731 1.285a1.75 1.75 0 0 1-1.072.136l-9.384-1.788a1.75 1.75 0 0 0-1.072.136l-1.611.758A1.49 1.49 0 0 1 2.5 18.151V6.611a1.75 1.75 0 0 1 1.005-1.584M6.75 3.5v15m10.5-13v15");
}

.d7sjy6e1p {
  d: path("m13.25 11.5l.641 2.053A1.5 1.5 0 0 1 12.46 15.5h-.92a1.5 1.5 0 0 1-1.431-1.947l.641-2.053a1.31 1.31 0 0 1 2.5 0m-1.25 4V17");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="accmptb0s"/><path class="d7sjy6e1p"/></g>`,
		"fallback": "uix:nature-reserve-map",
	});
}

export default Component;
