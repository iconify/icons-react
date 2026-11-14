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
		"content": `<style>.c-zihdbfh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 5h2.5v14H2Zm4.75 0h5.5v14h-5.5Zm7.75 0H17v14h-2.5Zm4.75 0h2.5v14h-2.5ZM9.5 10.25h.01m-.01 3.5h.01");
}
</style><path class="c-zihdbfh"/>`,
		"fallback": "uix-sharp:memory-test",
	});
}

export default Component;
