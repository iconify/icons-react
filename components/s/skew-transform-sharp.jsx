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
		"content": `<style>.ob_9lpblp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 9h12.5l-.9 1.2l-2.7 3.6l-.9 1.2h-14l.9-1.2l2.7-3.6l.9-1.2zM8.5 4.5h9M16 3l1.5 1.5L16 6m-.5 13.5h-9M8 18l-1.5 1.5L8 21");
}
</style><path class="ob_9lpblp"/>`,
		"fallback": "iconoven:skew-transform-sharp",
	});
}

export default Component;
