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
		"content": `<style>.fk87gebyx {
  d: path("M5 9a7 7 0 1 0 14 0A7 7 0 1 0 5 9ZM3.5 21.5c0-1.75 3.5-2.75 8.5-2.75s8.5 1 8.5 2.75");
}

.j08wtouhr {
  d: path("M8 8.5h8c0 3-1.75 4.5-4 4.5s-4-1.5-4-4.5Zm.5 2h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fk87gebyx"/><path class="j08wtouhr"/></g>`,
		"fallback": "uix-sharp:orthodontist",
	});
}

export default Component;
