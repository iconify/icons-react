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
		"content": `<style>.jk6zfmqwn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 4.5h8A3.5 3.5 0 0 1 19.5 8v10a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 18V8A3.5 3.5 0 0 1 8 4.5m0-2v4m4-4v4m4-4v4M8 11h8m-8 3.5h8M8 18h4.5");
}
</style><path class="jk6zfmqwn"/>`,
		"fallback": "uix:notepad",
	});
}

export default Component;
