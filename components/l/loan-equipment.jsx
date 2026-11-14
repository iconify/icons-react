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
		"content": `<style>.g7vky-tem {
  d: path("M17 3h2a3 3 0 0 1 0 6h-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wnw482uzd {
  d: path("M6.5 6v11.9m-.3 1.6H2.5m6-4.1V12h11v3.4M10 12V8h1.5m-5 7h2m.5 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm6 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM14 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><g class="ulnmmdpxh"><path class="wnw482uzd"/><path class="g7vky-tem"/></g>`,
		"fallback": "uix-sharp:loan-equipment",
	});
}

export default Component;
