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
		"content": `<style>.aof9_hbic {
  d: path("M3.75 15.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xk03ohb9g {
  d: path("M3.75 15.5c0-4.5 2-7.5 5.75-9m4.25 9a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.y3honzxlq {
  d: path("M13.75 15.5c0-4.5 2-7.5 5.75-9");
}
</style><g class="ulnmmdpxh"><path class="aof9_hbic"/><path class="xk03ohb9g"/><path class="y3honzxlq"/></g>`,
		"fallback": "uix-sharp:quote-open",
	});
}

export default Component;
