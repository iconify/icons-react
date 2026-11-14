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
		"content": `<style>.tc9fzd7xt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5v3.75C3 8.25 4.75 10 6.75 10s3.75-1.75 3.75-3.75V2.5M6.75 10v2.5c0 2.5 2 4.5 4.5 4.5q.221 0 .436-.02m4.064-4.591V11M13.5 8.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm.75 9.25q1.875-5.625 3.75 0t3.75 0");
}
</style><path class="tc9fzd7xt"/>`,
		"fallback": "uix-sharp:stethoscope-digital",
	});
}

export default Component;
