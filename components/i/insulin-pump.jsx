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
		"content": `<style>.ebuv5l2qm {
  d: path("M5 5.5h7.5v4H5Zm7 7.5c0 3.5-3.5 3.5-3.5 6c0 2.25 4 2.5 6.75.5m.5-1.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm2.75 0h.01");
}

.excek_s5g {
  d: path("M2.5 3H15v10H2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="excek_s5g"/><path class="ebuv5l2qm"/></g>`,
		"fallback": "uix-sharp:insulin-pump",
	});
}

export default Component;
