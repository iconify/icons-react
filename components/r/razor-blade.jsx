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
		"content": `<style>.m20o5b2jc {
  d: path("M3.5 7h17v10h-17ZM7 12h10");
}

.r166okuox {
  d: path("M6 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm10 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m20o5b2jc"/><path class="r166okuox"/></g>`,
		"fallback": "uix-sharp:razor-blade",
	});
}

export default Component;
