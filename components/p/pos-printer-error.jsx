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
		"content": `<style>.saevthbsa {
  d: path("M12.2 21.5H2.5V9h19v3.2M6.5 9V2.5h11V9m-8-3.5h5m-12 7H14M6 17h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wsmvk6bnw {
  d: path("M14 18a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm4-2.25v2.75m0 2h.01");
}
</style><g class="ulnmmdpxh"><path class="saevthbsa"/><path class="wsmvk6bnw"/></g>`,
		"fallback": "uix-sharp:pos-printer-error",
	});
}

export default Component;
