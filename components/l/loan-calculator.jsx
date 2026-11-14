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

.wk6_8x8im {
  d: path("M7.5 5.5h9V9h-9Zm1 7.5h.01M12 13h.01m3.49 0h.01M8.5 17h7");
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="wk6_8x8im"/></g>`,
		"fallback": "uix-sharp:loan-calculator",
	});
}

export default Component;
