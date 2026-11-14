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
		"content": `<style>.amtaj-x2u {
  d: path("M2.5 3.5h2V15h8.7m4.3-2.8V8.5h-13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.le17h1bgt {
  d: path("M3.75 16.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m6.25 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M16 15h5.5m-3.25 2.75h1A1.75 1.75 0 0 1 21 19.5v.5a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 16.5 20v-.5a1.75 1.75 0 0 1 1.75-1.75");
}
</style><g class="hntgybcog"><path class="amtaj-x2u"/><path class="le17h1bgt"/></g>`,
		"fallback": "uix:medication-trolley",
	});
}

export default Component;
