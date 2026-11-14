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
		"content": `<style>.ga7qoynrs {
  d: path("M12 17c0-3-2.5-5-5-5c0 3 2.5 5 5 5Zm0-3.5c0-3 2.5-5 5-5c0 3-2.5 5-5 5Z");
}

.nfysj1bcw {
  d: path("M3 5h18v15.5H3Zm5.5 0L12 2.5L15.5 5M12 17.5V10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nfysj1bcw"/><path class="ga7qoynrs"/></g>`,
		"fallback": "uix-sharp:plant-wall-frame",
	});
}

export default Component;
