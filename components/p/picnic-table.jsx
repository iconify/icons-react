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
		"content": `<style>.nsanc7bfs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 4.5h16V8H4ZM9 8L5.5 20.5M15 8l3.5 12.5M2.5 14h4.75m9.5 0h4.75");
}
</style><path class="nsanc7bfs"/>`,
		"fallback": "uix-sharp:picnic-table",
	});
}

export default Component;
