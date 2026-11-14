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
		"content": `<style>.o0oia-hgf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 16L11 8c3.25-3 6-3.75 7.25-2.25C19.75 7 19 9.75 16 13l-8 7.75Zm2-2.25l5 5");
}
</style><path class="o0oia-hgf"/>`,
		"fallback": "uix-sharp:suppository",
	});
}

export default Component;
