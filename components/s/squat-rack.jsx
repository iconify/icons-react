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
		"content": `<style>.hy7v8b-bm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 21V6m12 15V6M3 21h6m6 0h6M2.5 6h19m-19-3H5v6H2.5ZM19 3h2.5v6H19Z");
}
</style><path class="hy7v8b-bm"/>`,
		"fallback": "uix-sharp:squat-rack",
	});
}

export default Component;
