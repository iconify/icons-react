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
		"content": `<style>.sx-yiqg4j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 20.5c1.5-3.5 2.25-5 3-8C10.5 6 14 3 17.5 3c2.75 0 4.25 2 3.5 4.5c-.75 2.25-4 2.25-4.75 0M2.5 20.5h19");
}
</style><path class="sx-yiqg4j"/>`,
		"fallback": "uix-sharp:tide-high",
	});
}

export default Component;
