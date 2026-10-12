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
		"content": `<style>.oi_m4tbhn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11h6.75v7.75H3.5zm1.25 0l.375-4.125L9.25 5.75M13.5 11h6.75v7.75H13.5zm1.25 0l.375-4.125L19.25 5.75");
}
</style><path class="oi_m4tbhn"/>`,
		"fallback": "iconoven:quote-sharp",
	});
}

export default Component;
