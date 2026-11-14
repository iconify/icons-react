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
		"content": `<style>.aqoch2kkx {
  d: path("M4.5 2.5h15v19h-15Zm3.5 4h8M8 10h8m-8 3.5h4");
}

.oas49dbjt {
  d: path("M3 19.5c2-3.25 4-3.25 4.5-1s2 2.25 3.5-.5c1-1.75 2.5-1 2.5.75c0 1.25 2.5 1 7.5-1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aqoch2kkx"/><path class="oas49dbjt"/></g>`,
		"fallback": "uix-sharp:signed-contract",
	});
}

export default Component;
