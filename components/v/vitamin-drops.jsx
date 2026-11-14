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
		"content": `<style>.evqivv0mh {
  d: path("M9 15.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3-3v6m-2.5-4.5l5 3m-5 0l5-3");
}

.n253icclv {
  d: path("M6.5 10h11v11.5h-11Zm4-2V5c0-2 3-2 3 0v3M8.75 8h6.5v2h-6.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n253icclv"/><path class="evqivv0mh"/></g>`,
		"fallback": "uix-sharp:vitamin-drops",
	});
}

export default Component;
