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
		"content": `<style>.nsxfh5sre {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h14v18l-3.5-2l-3.5 2l-3.5-2L5 21Zm3.5 4h7m-7 4.25h7m-8 2.25l9-4.5m-8 6.5h4");
}
</style><path class="nsxfh5sre"/>`,
		"fallback": "uix-sharp:pos-item-void",
	});
}

export default Component;
