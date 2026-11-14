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
		"content": `<style>.m_0y8cbrj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 19.5l15-15m-12 12q3 0 3 3q-3 0-3-3Zm4-4q3 0 3 3q-3 0-3-3Zm4-4q3 0 3 3q-3 0-3-3Zm-8 8q-3 0-3-3q3 0 3 3Zm4-4q-3 0-3-3q3 0 3 3Zm4-4q-3 0-3-3q3 0 3 3Z");
}
</style><path class="m_0y8cbrj"/>`,
		"fallback": "uix-sharp:thyme-sprig",
	});
}

export default Component;
