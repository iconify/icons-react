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
		"content": `<style>.vtusomy8y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6c-2-1.5-5.5-2-9-1.5V19c3.5-.5 7 0 9 1.5c2-1.5 5.5-2 9-1.5V4.5c-3.5-.5-7 0-9 1.5Zm0 0v14.5M6 9h3m6 0h3");
}
</style><path class="vtusomy8y"/>`,
		"fallback": "uix-sharp:magazine-open",
	});
}

export default Component;
