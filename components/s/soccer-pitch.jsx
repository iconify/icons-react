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
		"content": `<style>.ctxb9ubwr {
  d: path("M2.5 5h19v14h-19ZM12 5v14");
}

.jippbdbvx {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM2.5 8.5h3v7h-3m19-7h-3v7h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ctxb9ubwr"/><path class="jippbdbvx"/></g>`,
		"fallback": "uix-sharp:soccer-pitch",
	});
}

export default Component;
