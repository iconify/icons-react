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
		"content": `<style>.neqpo3bby {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3v12m5.196-9L3.804 12m10.392 0L3.804 6M17.5 13.5s-2.5 3-2.5 5a2.5 2.5 0 0 0 5 0c0-2-2.5-5-2.5-5Z");
}
</style><path class="neqpo3bby"/>`,
		"fallback": "uix-sharp:thaw",
	});
}

export default Component;
