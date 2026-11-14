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
		"content": `<style>.fagxtxbcg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 3l7.5-.25l.25 5l-8 .25Zm10.5-.25l7.5.5l.25 4.75l-8-.25Zm-9 8l15-.25l.25 3.75l-15.5.25ZM3 17.25l7.5-.25l.25 4l-8 .25ZM13.5 17l7.75.25L21 21l-7.75.25Z");
}
</style><path class="fagxtxbcg"/>`,
		"fallback": "uix-sharp:stone-wall",
	});
}

export default Component;
