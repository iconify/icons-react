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
		"content": `<style>.eoz3zibrm {
  d: path("M4.5 2.5h15v19h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yyabz_-yl {
  d: path("m8 15.5l2.75-4l2.5 2l2.75-5m-5.5 10h3");
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="yyabz_-yl"/></g>`,
		"fallback": "uix-sharp:lab-tablet",
	});
}

export default Component;
