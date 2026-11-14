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
		"content": `<style>.h0arz6x7j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10 18l.5-12.25l1.5-2l1.5 2L14 18Zm-5.5 3.5v-1.75h2.75V18h9.5v1.75h2.75v1.75Zm6-15.75h3");
}
</style><path class="h0arz6x7j"/>`,
		"fallback": "uix-sharp:landmark-nearby",
	});
}

export default Component;
