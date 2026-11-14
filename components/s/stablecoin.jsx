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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vyzbnkbbf {
  d: path("M2.5 9v3a4 2.5 0 0 0 8 0V9m3 0a4 2.5 0 1 0 8 0a4 2.5 0 1 0-8 0Z");
}

.vzrb_jbrn {
  d: path("M2.5 9a4 2.5 0 1 0 8 0a4 2.5 0 1 0-8 0Z");
}

.zr9bgyb0d {
  d: path("M13.5 9v3a4 2.5 0 0 0 8 0V9m-19 8.5h19");
}
</style><g class="ulnmmdpxh"><path class="vzrb_jbrn"/><path class="vyzbnkbbf"/><path class="zr9bgyb0d"/></g>`,
		"fallback": "uix-sharp:stablecoin",
	});
}

export default Component;
