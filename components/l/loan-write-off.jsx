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
		"content": `<style>.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.tsw6xkb8a {
  d: path("m11.494 16.163l-2.615 2.615l-5.657-5.657l9.899-9.899l5.657 5.657l-3.324 3.324m-9.05-2.264l5.445 5.445M3 20.5h6m5-2.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tsw6xkb8a"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix-sharp:loan-write-off",
	});
}

export default Component;
