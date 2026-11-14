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
		"content": `<style>.ikhl1g6lx {
  d: path("M7.5 2.5h4a1 1 0 0 1 1 1V12a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1Z");
}

.ljoo7nyco {
  fill: currentColor;
  d: path("M15.75 18.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}

.ssv985b6c {
  d: path("M3.75 10a5.75 5.75 0 0 0 11.5 0M9.5 15.75v5.75m-3.5 0h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ikhl1g6lx"/><path class="ssv985b6c"/><path class="ljoo7nyco"/></g>`,
		"fallback": "uix-sharp:podcast-recording",
	});
}

export default Component;
