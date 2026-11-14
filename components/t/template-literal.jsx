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
		"content": `<style>.mdoawy4yh {
  d: path("M10.25 11.75c-1 0-1.25.5-1.25 1.25v1c0 .6-.4 1-1 1c.6 0 1 .4 1 1v1c0 .75.25 1.25 1.25 1.25m3.5-6.5c1 0 1.25.5 1.25 1.25v1c0 .6.4 1 1 1c-.6 0-1 .4-1 1v1c0 .75-.25 1.25-1.25 1.25");
}

.s7ddlnlir {
  d: path("M4.5 2.5h15v19h-15Zm4.75 2.75l1.5 3m2-3l1.5 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s7ddlnlir"/><path class="mdoawy4yh"/></g>`,
		"fallback": "uix-sharp:template-literal",
	});
}

export default Component;
