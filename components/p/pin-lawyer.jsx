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
		"content": `<style>.duxmoib7b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.909 3.02l7.071 7.071l-3.889 3.889L9.02 6.909ZM12.5 10.5L4 19m8.5 2h8");
}
</style><path class="duxmoib7b"/>`,
		"fallback": "uix-sharp:pin-lawyer",
	});
}

export default Component;
