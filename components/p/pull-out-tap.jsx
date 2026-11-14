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
		"content": `<style>.a6vzn6bei {
  d: path("M16.5 10.5h3v5h-3Zm-8.5 3l-3-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zis83bc9d {
  d: path("M4.5 21h9M8 21V8a5 5 0 0 1 10 0v2.5");
}
</style><g class="ulnmmdpxh"><path class="zis83bc9d"/><path class="a6vzn6bei"/></g>`,
		"fallback": "uix-sharp:pull-out-tap",
	});
}

export default Component;
