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
		"content": `<style>.hg7krvbzg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.39 3.67l6.72 15.91l.39.92l-.89-.45l-5.72-2.85l-.89-.45l-.89.45l-5.72 2.85l-.89.45l.39-.92l6.72-15.91l.39-.92z");
}
</style><path class="hg7krvbzg"/>`,
		"fallback": "iconoven:navigation-off-sharp",
	});
}

export default Component;
