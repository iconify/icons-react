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
		"content": `<style>.opr1tbypw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5h7v7h-7Zm7 3.5h5.75M18 12h3.5m-4.25-2l2.5-2.5m-2.5 6.5l2.5 2.5");
}
</style><path class="opr1tbypw"/>`,
		"fallback": "uix-sharp:laser-beam",
	});
}

export default Component;
