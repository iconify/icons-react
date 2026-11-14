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
		"content": `<style>.rhh7e5g-k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.642 17.87l.794-9.132a1.5 1.5 0 0 1 .689-1.136l4.416-2.81a1.5 1.5 0 0 1 .999-.222l9.748 1.272a1.5 1.5 0 0 1 1.302 1.377l.791 10.67a1.5 1.5 0 0 1-1.496 1.611H4.136a1.5 1.5 0 0 1-1.494-1.63M3 11.5l18-1.75m-18.25 6l18.5-1.5");
}
</style><path class="rhh7e5g-k"/>`,
		"fallback": "uix:sandstone",
	});
}

export default Component;
