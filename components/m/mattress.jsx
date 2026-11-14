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
		"content": `<style>.p5uapgboc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17V7h16a3 3 0 0 1 3 3v7Zm0-7h19m-19 4h19");
}
</style><path class="p5uapgboc"/>`,
		"fallback": "uix-sharp:mattress",
	});
}

export default Component;
