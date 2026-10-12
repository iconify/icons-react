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
		"content": `<style>.la8whubsv {
  d: path("M2.75 8.25h13v12h-13zm.75 3.5H15");
}

.u-jzcpbzy {
  d: path("M7.5 8.25v-4.5h13.75v12.5h-5.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="la8whubsv"/><path class="u-jzcpbzy"/></g>`,
		"fallback": "iconoven:restore-window-sharp",
	});
}

export default Component;
