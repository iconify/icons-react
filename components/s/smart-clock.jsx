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
		"content": `<style>.lkua-1lrf {
  d: path("M12 10.25v3.25h3");
}

.lpbm8vbfk {
  d: path("M5 13.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0ZM3 8a3.75 3.75 0 0 1 5-5Zm13-5a3.75 3.75 0 0 1 5 5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lpbm8vbfk"/><path class="lkua-1lrf"/></g>`,
		"fallback": "uix-sharp:smart-clock",
	});
}

export default Component;
