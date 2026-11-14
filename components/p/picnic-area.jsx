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
		"content": `<style>.tf_b42h0f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 6h16M2.5 12.5h19M8.5 6L5 19M15.5 6L19 19");
}
</style><path class="tf_b42h0f"/>`,
		"fallback": "uix-sharp:picnic-area",
	});
}

export default Component;
