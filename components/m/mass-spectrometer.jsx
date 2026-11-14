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
		"content": `<style>.na0rd0bej {
  d: path("M11.5 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xvpzhc6sb {
  d: path("M6 6h15.5v12H6Zm-3.5 6H6");
}
</style><g class="ulnmmdpxh"><path class="xvpzhc6sb"/><path class="na0rd0bej"/></g>`,
		"fallback": "uix-sharp:mass-spectrometer",
	});
}

export default Component;
