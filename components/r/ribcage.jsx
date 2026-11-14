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
		"content": `<style>.xc9x_vxdw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v18M12 5c-3 0-7 .5-7 3.5m7 1.25c-3 0-7 .5-7 3.5m7 1.25c-3 0-7 .5-7 3.5m7-13c3 0 7 .5 7 3.5m-7 1.25c3 0 7 .5 7 3.5m-7 1.25c3 0 7 .5 7 3.5");
}
</style><path class="xc9x_vxdw"/>`,
		"fallback": "uix-sharp:ribcage",
	});
}

export default Component;
