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
		"content": `<style>.t7oboj9fp {
  d: path("M5.75 2.75h12.5v11.5H5.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z88ylabtd {
  d: path("M8.25 5.25h7.5v5.5h-7.5zm2.5 9h3l.08.49l.59 3.52l.08.49h-5l.08-.49l.59-3.52l.08-.49zm-4 7h10.5");
}
</style><g class="x2cwu0gfd"><path class="t7oboj9fp"/><path class="z88ylabtd"/></g>`,
		"fallback": "iconoven:kiosk-sharp",
	});
}

export default Component;
