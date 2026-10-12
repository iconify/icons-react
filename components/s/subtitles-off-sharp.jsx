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
		"content": `<style>.lm05a3bor {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.75h18.5v14.5H2.75zm4 7.5h3m2.5 0h5m-10.5 3.5h6.5m2.5 0h1.5");
}
</style><path class="lm05a3bor"/>`,
		"fallback": "iconoven:subtitles-off-sharp",
	});
}

export default Component;
