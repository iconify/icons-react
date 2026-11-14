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
		"content": `<style>.eurtzzbzu {
  d: path("M11 6h5.5v3.5H11Zm4 15l5.25-5.25m-4-.25h4.25v4.25");
}

.qr24ow0rj {
  d: path("M11.6 21.5H4.5v-19h15v10.1M8 2.5v19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qr24ow0rj"/><path class="eurtzzbzu"/></g>`,
		"fallback": "uix-sharp:statement-export-ofx",
	});
}

export default Component;
