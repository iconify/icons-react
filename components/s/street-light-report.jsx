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
		"content": `<style>.b7h1nc2wo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21h6m-3 0V9m0 0a6 6 0 0 1 6-6m1.016 0h3.968A1.17 1.17 0 0 1 18.5 4.75l-.568.994a1.5 1.5 0 0 1-1.302.756h-2.26a1.5 1.5 0 0 1-1.302-.756L12.5 4.75A1.17 1.17 0 0 1 13.516 3m.984 10.5H18l3.5 3.5v4.5h-7Zm2.25 5.5h2.5");
}
</style><path class="b7h1nc2wo"/>`,
		"fallback": "uix:street-light-report",
	});
}

export default Component;
