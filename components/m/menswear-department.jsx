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
		"content": `<style>.fqh06bcpx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3h4l-.5 4h-3Zm.5 4h3L15 18l-3 3l-3-3Z");
}
</style><path class="fqh06bcpx"/>`,
		"fallback": "uix-sharp:menswear-department",
	});
}

export default Component;
