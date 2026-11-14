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
		"content": `<style>.ad_ccibjl {
  d: path("M3 3h6.5v6.5H3Zm11.5 0H21v6.5h-6.5ZM3 14.5h6.5V21H3Zm3.25-8.25h.01m11.49 0h.01M6.25 17.75h.01m8.265 2.457l3.182-3.182l1.768 1.768l-3.182 3.182Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yt8w73dkl {
  d: path("m17.025 17.707l3.182-3.182l1.768 1.768l-3.182 3.182Z");
}
</style><g class="ulnmmdpxh"><path class="ad_ccibjl"/><path class="yt8w73dkl"/></g>`,
		"fallback": "uix-sharp:qr-pairing",
	});
}

export default Component;
