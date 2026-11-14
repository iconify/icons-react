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
		"content": `<style>.d_newem_b {
  d: path("M3 19.5h3.5m3 0h5m3 0H21");
}

.gqkmm4aci {
  fill: currentColor;
  d: path("M2 12h20v2.5H2Z");
}

.ufkw6fvrl {
  d: path("M3 3.5h18M3 8h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ufkw6fvrl"/><path class="gqkmm4aci"/><path class="d_newem_b"/></g>`,
		"fallback": "uix-sharp:limit-rows",
	});
}

export default Component;
