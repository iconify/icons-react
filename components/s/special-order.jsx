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
		"content": `<style>.aeui5abjf {
  d: path("m17.75 14l1.029 2.084l2.3.334l-1.665 1.623l.393 2.291l-2.057-1.082l-2.057 1.082l.393-2.291l-1.665-1.623l2.3-.334Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yoxakxbmv {
  d: path("M12.7 21.5H3.5v-19h14v5.7m-11-1.7h8m-8 3.5h8m-8 3.5H11");
}
</style><g class="ulnmmdpxh"><path class="yoxakxbmv"/><path class="aeui5abjf"/></g>`,
		"fallback": "uix-sharp:special-order",
	});
}

export default Component;
