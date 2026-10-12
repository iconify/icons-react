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
		"content": `<style>.g92vlqbmo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.71 8.71l2.58 2.58q.71.71 0 1.42l-2.58 2.58q-.71.71-1.42 0l-2.58-2.58q-.71-.71 0-1.42l2.58-2.58q.71-.71 1.42 0M8.44 3.14l1.42 1.42q.53.53 0 1.06L5.62 9.86q-.53.53-1.06 0L3.14 8.44q-.53-.53 0-1.06l4.24-4.24q.53-.53 1.06 0m11 11l1.42 1.42q.53.53 0 1.06l-4.24 4.24q-.53.53-1.06 0l-1.42-1.42q-.53-.53 0-1.06l4.24-4.24q.53-.53 1.06 0M10 10L7.75 7.75M14 14l2.25 2.25m-11-11l2.5 2.5m8.5 8.5l2.5 2.5m-9.09-1.23a6 6 0 0 1-3.18-3.18m2 5.94a9 9 0 0 1-4.76-4.76");
}
</style><path class="g92vlqbmo"/>`,
		"fallback": "iconoven:satellite",
	});
}

export default Component;
