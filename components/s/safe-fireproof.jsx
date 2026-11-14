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
		"content": `<style>.dcc1v5b6t {
  d: path("M7 11.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM17 8v.6m1 12.9c-2.25 0-3.5-1.5-3.25-3.25c.25-1.5 1.25-2 1.5-3.25c.75.75 1 1.5 1 2.25c.75-.75 1.5-2 1.5-3.5c1.75 1.5 2.75 3.25 2.75 4.75c0 1.75-1.5 3-3.5 3Z");
}

.mele0fbqz {
  d: path("M12 19.5H3v-16h18V12M6.5 19.5V21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mele0fbqz"/><path class="dcc1v5b6t"/></g>`,
		"fallback": "uix-sharp:safe-fireproof",
	});
}

export default Component;
