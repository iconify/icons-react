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
		"content": `<style>.brypy-cbp {
  d: path("M12.2 21.5H4v-19h15v9.8M8 2.5v19");
}

.fdijoq8gv {
  d: path("M12 2.5V8l1.5-1.25L15 8V2.5m0 15h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="brypy-cbp"/><path class="fdijoq8gv"/></g>`,
		"fallback": "uix-sharp:journal-lock",
	});
}

export default Component;
