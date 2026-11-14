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
		"content": `<style>.c3wgojkty {
  d: path("M18 15v6m-3-3h6");
}

.cerg1abxz {
  d: path("M12.288 18.618A6.7 6.7 0 0 1 10 19c-3 0-5-1.75-5-3.5S7.25 12 10 12c2.609 0 4.768 1.575 4.982 3.231");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qzqdyabpd {
  fill: currentColor;
  d: path("M2 9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m3.5-4.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m6 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M15 9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="cerg1abxz"/><path class="qzqdyabpd"/><path class="c3wgojkty"/></g>`,
		"fallback": "uix:pin-vet",
	});
}

export default Component;
