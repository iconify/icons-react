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
		"content": `<style>.k_cro8zpl {
  d: path("M5 11h14v3H5Zm3.5-8.5h7m-3.5 0V11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x-xvdcc7d {
  d: path("M5 5v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5");
}
</style><g class="ulnmmdpxh"><path class="x-xvdcc7d"/><path class="k_cro8zpl"/></g>`,
		"fallback": "uix-sharp:piston-cylinder",
	});
}

export default Component;
