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
		"content": `<style>.vkr037eed {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 5.5H17l.47 1.43l3.31 10.14l.47 1.43H2.75l.47-1.43L6.53 6.93L7 5.5zm1.83 0l-1.41 13m4.75-13l1.41 13");
}
</style><path class="vkr037eed"/>`,
		"fallback": "iconoven:perspective-transform-sharp",
	});
}

export default Component;
