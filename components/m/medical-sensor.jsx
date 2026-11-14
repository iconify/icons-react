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
		"content": `<style>.a3cqx7bnf {
  d: path("M4.5 10.5H13V19H4.5Z");
}

.cj4hhxb3z {
  d: path("M7.25 14.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM2.5 13h2m-2 3.5h2M7 19v2m3.5-2v2M13 7a3.5 3.5 0 0 1 3.5 3.5M13 3.75a6.75 6.75 0 0 1 6.75 6.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a3cqx7bnf"/><path class="cj4hhxb3z"/></g>`,
		"fallback": "uix-sharp:medical-sensor",
	});
}

export default Component;
