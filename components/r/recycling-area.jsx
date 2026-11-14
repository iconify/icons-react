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
		"content": `<style>.cxqipfb2x {
  d: path("m10 8.75l1.5 1l-1 1.5");
}

.cxrwcmi0o {
  d: path("M14.25 10.569a3.5 3.5 0 0 1-1.642 6.128");
}

.flc9jfbud {
  d: path("m14 17.75l-1.5-1l1-1.5m-3.75.681a3.5 3.5 0 0 1 1.642-6.128");
}

.t51nt3crp {
  d: path("M3.5 5h17m-11 0V3h5v2M5 5l1.5 16.5h11L19 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t51nt3crp"/><path class="cxrwcmi0o"/><path class="flc9jfbud"/><path class="cxqipfb2x"/></g>`,
		"fallback": "uix-sharp:recycling-area",
	});
}

export default Component;
