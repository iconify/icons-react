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
		"content": `<style>.gfxyuwx8l {
  d: path("m3 13.75l14 2.5l1.5-1.5l2 3l-1.5 3H7.5Z");
}

.go4arfbfa {
  d: path("m10 15l3-6l1.5 1M3 4.25q3-2.625 6 0t6 0t6 0M2.5 20.75h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gfxyuwx8l"/><path class="go4arfbfa"/></g>`,
		"fallback": "uix-sharp:underwater-wreck",
	});
}

export default Component;
