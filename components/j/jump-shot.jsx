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
		"content": `<style>.depprosxk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 9.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-3 12V18q0-3.5 3.5-3.5h4q3.5 0 3.5 3.5v3.5m-2-7L16 7m-1-2a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><path class="depprosxk"/>`,
		"fallback": "uix:jump-shot",
	});
}

export default Component;
