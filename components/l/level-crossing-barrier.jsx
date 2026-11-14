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
		"content": `<style>.n77htxbxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7h18.5v3.5H3Zm2 3.5v11m4.5-11l2-3.5m3.5 3.5L17 7M2.5 21.5h5");
}
</style><path class="n77htxbxh"/>`,
		"fallback": "uix-sharp:level-crossing-barrier",
	});
}

export default Component;
