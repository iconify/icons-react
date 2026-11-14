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
		"content": `<style>.b28rrzbgr {
  d: path("M10.5 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.o-o9zybvr {
  d: path("M5.5 15a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yyq2lpvem {
  d: path("M12 12L9.75 4.75a2.25 2.25 0 0 1 4.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="o-o9zybvr"/><path class="yyq2lpvem"/><path class="b28rrzbgr"/></g>`,
		"fallback": "uix-sharp:kids-backpack-tag",
	});
}

export default Component;
