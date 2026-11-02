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
		"content": `<style>.npedpf06a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6h7m4 0h7M3 12h13m4 0h1M3 18h4m4 0h10M10 4v4m6 2v4m-9 2v4");
}
</style><path class="npedpf06a"/>`,
		"fallback": "coolicons:slider-3",
	});
}

export default Component;
