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
		"content": `<style>.cql1pwtbp {
  cx: 12px;
  cy: 16px;
  r: 2px;
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mgx0gjb2o {
  d: path("M8 22H16C18.8284 22 20.2426 22 21.1213 21.1213C22 20.2426 22 18.8284 22 16C22 13.1716 22 11.7574 21.1213 10.8787C20.2426 10 18.8284 10 16 10H8C5.17157 10 3.75736 10 2.87868 10.8787C2 11.7574 2 13.1716 2 16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22Z");
}

.xax-53bab {
  d: path("M6 10V8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V10");
}
</style><g class="ipq1z-bjh"><path class="mgx0gjb2o"/><circle class="cql1pwtbp"/><path class="xax-53bab"/></g>`,
		"fallback": "solar:lock-keyhole-linear",
	});
}

export default Component;
