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
		"content": `<style>.g216uyeia {
  d: path("m11.5 13l8.75-7M9.5 11.5l3.25-8.75");
}

.opyybkahz {
  cx: 8.5px;
  cy: 15.5px;
  r: 5.75px;
}

.smequvrdt {
  d: path("M5 11.75c2.5 1.25 4.25 4 4.25 8.25m-6-3.75h4.167l2.333 3.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="g216uyeia"/><circle class="opyybkahz"/><path class="smequvrdt"/></g>`,
		"fallback": "iconoven:knitting-needles-sharp",
	});
}

export default Component;
