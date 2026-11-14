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
		"content": `<style>.bx_ysgbij {
  d: path("M9.75 14.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm.54 4.698A5 5 0 0 1 7.67 12m6.04-2.198A5 5 0 0 1 16.33 17");
}

.dnp5vqbmq {
  d: path("M4 2h16v20H4Zm0 4.5h16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dnp5vqbmq"/><path class="bx_ysgbij"/></g>`,
		"fallback": "uix-sharp:washing-machine-running",
	});
}

export default Component;
