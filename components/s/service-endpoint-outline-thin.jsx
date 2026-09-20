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
		"content": `<style>.fg6rngtfi {
  d: path("M11.5 13.5H14");
}

.h3ct3nrnz {
  d: path("M4 11a2 2 0 0 1 2 -2h2.5a2 2 0 0 1 2 2v2.5a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qlnp72b5h {
  d: path("M17.5 4v16");
}

.uojh1zbuj {
  d: path("M11.5 10.5H14");
}
</style><g class="hntgybcog"><path class="h3ct3nrnz"/><path class="uojh1zbuj"/><path class="fg6rngtfi"/><path class="qlnp72b5h"/></g>`,
		"fallback": "iconmind:service-endpoint-outline-thin",
	});
}

export default Component;
