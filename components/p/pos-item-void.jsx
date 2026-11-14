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
		"content": `<style>.ny2ffvbxk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 3h10.5A1.75 1.75 0 0 1 19 4.75v14.234A1.17 1.17 0 0 1 17.25 20l-.882-.504a1.75 1.75 0 0 0-1.736 0l-1.764 1.008a1.75 1.75 0 0 1-1.736 0l-1.764-1.008a1.75 1.75 0 0 0-1.736 0L6.75 20A1.17 1.17 0 0 1 5 18.984V4.75A1.75 1.75 0 0 1 6.75 3M8.5 7h7m-7 4.25h7m-8 2.25l9-4.5m-8 6.5h4");
}
</style><path class="ny2ffvbxk"/>`,
		"fallback": "uix:pos-item-void",
	});
}

export default Component;
