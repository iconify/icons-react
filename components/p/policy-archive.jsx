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
		"content": `<style>.yhlbn5brp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h18v5H3Zm1.5 5v9a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V9M10 13h4");
}
</style><path class="yhlbn5brp"/>`,
		"fallback": "uix-sharp:policy-archive",
	});
}

export default Component;
