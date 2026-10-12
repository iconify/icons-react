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
		"content": `<style>.fcq-wrlrl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75v18.5m-2.75-.75c1.25-.25 1.75-2 2.75-2c3.5 0 3.5-3.5 0-3.5s-3.5-3.5 0-3.5S15.5 8 12 8H9.583L8.75 5.5m-1.5-2.25a1.75 1.25 0 1 1 0 2.5a1.75 1.25 0 1 1 0-2.5Z");
}
</style><path class="fcq-wrlrl"/>`,
		"fallback": "iconoven:rod-of-asclepius-sharp",
	});
}

export default Component;
