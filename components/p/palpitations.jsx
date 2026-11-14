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
		"content": `<style>.zs62gz_ad {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 17.25s-5.5-3.5-5.5-7c0-1.75 1.25-3 2.75-3c1.25 0 2.25.75 2.75 1.5c.5-.75 1.5-1.5 2.75-1.5c1.5 0 2.75 1.25 2.75 3c0 3.5-5.5 7-5.5 7M3.75 8a9 9 0 0 0 0 8m16.5-8c1.25 2.5 1.25 5.5 0 8");
}
</style><path class="zs62gz_ad"/>`,
		"fallback": "uix:palpitations",
	});
}

export default Component;
