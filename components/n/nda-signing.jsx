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
		"content": `<style>.r2-zcbbus {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9h7.5v6.5H3Zm1.75 0V7a2 2 0 0 1 4 0v2m9.951-.446l2.598 1.5l-4.625 8.011L14 19.696l.076-3.131ZM3 19.75h11");
}
</style><path class="r2-zcbbus"/>`,
		"fallback": "uix-sharp:nda-signing",
	});
}

export default Component;
