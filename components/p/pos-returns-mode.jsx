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
		"content": `<style>.gtmfpjb_h {
  d: path("m14 20l1.5 1.5L17 20");
}

.n3j3dga2t {
  d: path("M16.3 12.5H2.5v-10H17v9.8m-8.25.2V19m2.85 2.5H4.5V19h6.6M5.5 6h5m-5 3.25H8m3 0h3m6.5 12.25v-4a2.5 2.5 0 0 0-5 0v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n3j3dga2t"/><path class="gtmfpjb_h"/></g>`,
		"fallback": "uix-sharp:pos-returns-mode",
	});
}

export default Component;
