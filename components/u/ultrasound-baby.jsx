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
		"content": `<style>.og2jpybff {
  d: path("M10.75 13.75C9.25 14.75 9 17 10.5 18c1.25.75 3.25.5 4.25-.75");
}

.qrqib4b2h {
  d: path("M12 2.5L3 17c3 3 6 4.25 9 4.25S18 20 21 17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uyod-9b0u {
  d: path("M10.5 12.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}
</style><g class="ulnmmdpxh"><path class="qrqib4b2h"/><path class="uyod-9b0u"/><path class="og2jpybff"/></g>`,
		"fallback": "uix-sharp:ultrasound-baby",
	});
}

export default Component;
