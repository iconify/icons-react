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
		"content": `<style>.c5mrhdchc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8 21l2-17.5h4L16 21Zm4-15.5v3m0 3v3m0 2.5v2");
}
</style><path class="c5mrhdchc"/>`,
		"fallback": "uix-sharp:runway",
	});
}

export default Component;
