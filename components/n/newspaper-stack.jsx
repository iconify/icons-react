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
		"content": `<style>.awcos6mbf {
  d: path("M8.5 2.5H20A1.5 1.5 0 0 1 21.5 4v11.5m-16-3h7m-7 4h5");
}

.fvqybepsk {
  d: path("M2.5 8.5h13v13h-13Z");
}

.maeuszbrt {
  d: path("M5.5 5.5H17A1.5 1.5 0 0 1 18.5 7v11.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fvqybepsk"/><path class="maeuszbrt"/><path class="awcos6mbf"/></g>`,
		"fallback": "uix-sharp:newspaper-stack",
	});
}

export default Component;
