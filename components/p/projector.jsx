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
		"content": `<style>.fquyk3b7k {
  d: path("M12.75 12a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM6 12h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vcrur55mw {
  d: path("M2.5 7h19v10h-19ZM6 17v2m12-2v2");
}
</style><g class="ulnmmdpxh"><path class="vcrur55mw"/><path class="fquyk3b7k"/></g>`,
		"fallback": "uix-sharp:projector",
	});
}

export default Component;
