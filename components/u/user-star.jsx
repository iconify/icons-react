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
		"content": `<style>.iuoj3g9oi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20c0-2.75 2.9-4.75 6.5-4.75s6.5 2 6.5 4.75c0 .6-.4 1-1 1h-11c-.6 0-1-.4-1-1M5.25 8.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m13.264.167l.177.315a1.5 1.5 0 0 0 1.015.737l.354.071a.59.59 0 0 1 .318.978l-.245.265a1.5 1.5 0 0 0-.388 1.193l.042.359a.59.59 0 0 1-.832.605l-.328-.151a1.5 1.5 0 0 0-1.254 0l-.328.151a.59.59 0 0 1-.832-.605l.042-.359a1.5 1.5 0 0 0-.388-1.193l-.245-.265a.59.59 0 0 1 .318-.978l.354-.071a1.5 1.5 0 0 0 1.015-.737l.177-.315a.59.59 0 0 1 1.028 0");
}
</style><path class="iuoj3g9oi"/>`,
		"fallback": "uix:user-star",
	});
}

export default Component;
