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
		"content": `<style>.kbu1ixbpp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11H8v10.5H2.5ZM8 11h2.5L12 5c.5-2.25 4-2.25 4 .5v5h3a2.5 2.5 0 0 1 2.5 2.5l-1.25 6.25a2.5 2.5 0 0 1-2.5 2.25H8Zm5 5.5h7.75");
}
</style><path class="kbu1ixbpp"/>`,
		"fallback": "uix-sharp:kid-thumbs-up",
	});
}

export default Component;
