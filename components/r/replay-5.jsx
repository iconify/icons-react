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
		"content": `<style>.ghtz8h6wm {
  d: path("M12 5.5a7.5 7.5 0 1 1-6.495 3.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zsys9-bft {
  d: path("m15 2.5l-3 3l3 3m-1.5 2h-2.75l-.25 2.25c.5-.25 1-.25 1.5-.25c1 0 1.75.75 1.75 1.5c0 1-.75 1.5-1.75 1.5q-1.125 0-1.5-.75");
}
</style><g class="ulnmmdpxh"><path class="ghtz8h6wm"/><path class="zsys9-bft"/></g>`,
		"fallback": "uix-sharp:replay-5",
	});
}

export default Component;
