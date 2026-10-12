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
		"content": `<style>.lec962bhn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 3.75h17.5M3.25 8h17.5m-17.5 4.25h17.5m-12 3L12 18l3.25-2.75m-7 5.75h7.5");
}
</style><path class="lec962bhn"/>`,
		"fallback": "iconoven:summarize-ai",
	});
}

export default Component;
