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
		"content": `<style>.cmwt9tbke {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 16c3 0 5-12 7.5-10.5S9 16 11 16s3-4 5-4s1.5 4 5 3M3 19.75h18");
}
</style><path class="cmwt9tbke"/>`,
		"fallback": "uix-sharp:reply-signature",
	});
}

export default Component;
