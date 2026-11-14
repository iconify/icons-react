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
		"content": `<style>.lq67wmbaz {
  d: path("M7 5.5H4v2A3.5 3.5 0 0 0 7.5 11M17 5.5h3v2a3.5 3.5 0 0 1-3.5 3.5M12 14v6m-3.5 0h7");
}

.si0wi76vy {
  d: path("M7 4h10v5A5 5 0 0 1 7 9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="si0wi76vy"/><path class="lq67wmbaz"/></g>`,
		"fallback": "uix-sharp:mvp-award",
	});
}

export default Component;
