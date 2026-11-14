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
		"content": `<style>.heagg9bky {
  d: path("m2.5 11l9.5 6l9.5-6");
}

.i45girxkv {
  d: path("M2.5 11v8.5A1.5 1.5 0 0 0 4 21h16a1.5 1.5 0 0 0 1.5-1.5V11");
}

.pldpw4w_c {
  d: path("M5.5 12.75V3.5a1 1 0 0 1 1-1h4.25L9.5 5.25L11 8l-1.5 2.75l.5 5m8.5-3V3.5a1 1 0 0 0-1-1H14l-1.25 2.75L14.25 8l-1.5 2.75l1.25 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i45girxkv"/><path class="heagg9bky"/><path class="pldpw4w_c"/></g>`,
		"fallback": "uix-sharp:job-offer-declined",
	});
}

export default Component;
