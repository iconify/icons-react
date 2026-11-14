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
		"content": `<style>.o58757jpd {
  d: path("M6.5 6.5h11A2.5 2.5 0 0 1 20 9v6a2.5 2.5 0 0 1-2.5 2.5h-2l-2.5-2h-2l-2.5 2h-2A2.5 2.5 0 0 1 4 15V9a2.5 2.5 0 0 1 2.5-2.5Z");
}

.ov-jvtb9l {
  d: path("M6.75 11.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm6.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM4 9.5H2.5v5H4m16-5h1.5v5H20");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o58757jpd"/><path class="ov-jvtb9l"/></g>`,
		"fallback": "uix-sharp:metaverse",
	});
}

export default Component;
